import {
  loginEmailPassword,
  registerWithEmailPassword,
  signInWithGoogle
} from '../../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    // llamando una funcion personalizada
    const resp = await signInWithGoogle()
    if (!resp.user) return dispatch(logout(resp.errorMessage))
    dispatch(login(resp))
  }
}

export const startUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const resp = await registerWithEmailPassword({ email, password, displayName })
    if (!resp.user) return dispatch(logout(resp.errorMessage))
    dispatch(login(resp))
  }
}

export const startLoginEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const resp = await loginEmailPassword({ email, password })
    if (!resp.user) return dispatch(logout(resp.errorMessage))
    dispatch(login(resp))
  }
}
