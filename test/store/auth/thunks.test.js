import { loginEmailPassword, signInWithGoogle } from '../../../src/firebase/providers'
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice'
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginEmailPassword,
  startLogout
} from '../../../src/store/auth/thunks'
import { clearNotesLogout } from '../../../src/store/journal'
import { demoUser } from '../../fixtures/authFixtures'

// haciendo un mock a todas las exportaciones de este archivo
jest.mock('../../../src/firebase/providers')

describe('Pruebas en Auth Thunks', () => {
  const dispatch = jest.fn()
  beforeEach(() => jest.clearAllMocks())

  test('Debe llamar al checkingCredentials', async () => {
    // el primer () es el llamado de la funcion,
    // el segundo () es el valor de retorno
    await checkingAuthentication()(dispatch)
    // expect(dispatch).toHaveBeenCalledWith({ payload: undefined, type: 'auth/checkingCredentials' })
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  })

  test('startGoogleSignIn debe llamar a checkingCredentials y login', async () => {
    const loginData = { user: demoUser }
    await signInWithGoogle.mockResolvedValue(loginData)
    // thunk
    await startGoogleSignIn()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  })

  test('startGoogleSignIn debe llamar a checkingCredentials y logout', async () => {
    const loginData = { user: null, errorMessage: 'Error de autenticación' }
    await signInWithGoogle.mockResolvedValue(loginData)
    await startGoogleSignIn()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
  })

  test('startLoginWithEmailPassword debe llamar a checkingCredentials y login', async () => {
    const loginData = { user: demoUser }
    const formData = { email: demoUser.email, password: '123abc' }
    await loginEmailPassword.mockResolvedValue(loginData)
    await startLoginEmailPassword(formData)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  })

  test('startLogout debe llamar a clearNotes y logout', async () => {
    await startLogout()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
    expect(dispatch).toHaveBeenCalledWith(logout())
  })
})
