import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'

import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth'
import { startLoadingNotes } from '../store/journal'

export default function useCheckAuth() {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout())
      const { email, uid, displayName, photoURL } = user
      const userLogin = {
        user: {
          email,
          uid,
          displayName,
          photoURL
        }
      }
      dispatch(login(userLogin))
      dispatch(startLoadingNotes())
    })
  }, [dispatch])

  return status
}
