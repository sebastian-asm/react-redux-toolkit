import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: (state, action) => {
      const { user } = action.payload
      state.status = 'authenticated'
      state.uid = user.uid
      state.email = user.email
      state.displayName = user.displayName
      state.photoURL = user.photoURL
      state.errorMessage = null
    },
    logout: (state, action) => {
      state.status = 'not-authenticated'
      state.uid = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = action.payload
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
})

export const { login, logout, checkingCredentials } = authSlice.actions
