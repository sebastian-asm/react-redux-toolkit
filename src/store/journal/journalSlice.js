import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) return action.payload
        return note
      })
      state.messageSaved = 'Nota actualizada correctamente'
    },
    deleteNote: (state, action) => {
      state.active = null
      state.notes = state.notes.filter((note) => note.id !== action.payload)
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
      state.isSaving = false
    },
    clearNotesLogout: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.notes = []
      state.active = null
    }
  }
})

export const {
  savingNewNote,
  addNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNote,
  setPhotosToActiveNote,
  clearNotesLogout
} = journalSlice.actions
