import { collection, doc, setDoc } from 'firebase/firestore/lite'

import { FirebaseDB } from '../../firebase/config'
import { addNewNote, savingNewNote, setActiveNote, setNotes } from './journalSlice'
import { loadNotes } from '../../helpers/loadNotes'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const newNote = {
      title: 'test',
      body: 'test',
      date: new Date().getTime()
    }

    dispatch(savingNewNote())
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
