import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from 'firebase/auth'

import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const resp = await signInWithPopup(FirebaseAuth, googleProvider)
    const { displayName, email, photoURL, uid } = resp.user
    return {
      user: {
        displayName,
        email,
        photoURL,
        uid
      }
    }
  } catch (error) {
    console.log(error)
    return {
      user: null,
      errorMessage: error.message
    }
  }
}

export const registerWithEmailPassword = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL } = resp.user
    // actualizar el displayName en Firebase
    await updateProfile(FirebaseAuth.currentUser, { displayName })
    return {
      user: {
        displayName,
        email,
        photoURL,
        uid
      }
    }
  } catch (error) {
    console.log(error)
    return {
      user: null,
      errorMessage: error.message
    }
  }
}

export const loginEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { displayName, uid, photoURL } = resp.user
    return {
      user: {
        displayName,
        email,
        photoURL,
        uid
      }
    }
  } catch (error) {
    console.log(error)
    return {
      user: null,
      errorMessage: error.message
    }
  }
}
