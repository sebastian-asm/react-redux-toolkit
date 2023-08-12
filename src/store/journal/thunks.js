import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore/lite'

import { FirebaseDB } from '../../firebase/config'
import {
  addNewNote,
  deleteNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote
} from './journalSlice'
import { loadNotes } from '../../helpers/loadNotes'
import uploadFiles from '../../helpers/uploadFiles'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())
    const { uid } = getState().auth
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: []
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)
    newNote.id = newDoc.id
    dispatch(addNewNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())
    const { uid } = getState().auth
    const { active: note } = getState().journal

    const noteToSave = { ...note }
    delete noteToSave.id

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await setDoc(docRef, noteToSave, { merge: true })
    dispatch(updateNote(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())
    let uploadFilesPromises = []
    for (const file of files) {
      uploadFilesPromises.push(uploadFiles(file))
    }

    const photoUrls = await Promise.all(uploadFilesPromises)
    dispatch(setPhotosToActiveNote(photoUrls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active: note } = getState().journal
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(docRef)
    dispatch(deleteNote(note.id))
  }
}
