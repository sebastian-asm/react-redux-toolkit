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
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNote: (state, action) => {}
  }
})

export const {
  savingNewNote,
  addNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNote
} = journalSlice.actions
