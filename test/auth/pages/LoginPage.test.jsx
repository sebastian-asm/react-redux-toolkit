import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'

import { authSlice } from '../../../src/store/auth'
import { notAuthenticatedState } from '../../fixtures/authFixtures'
import LoginPage from '../../../src/auth/pages/LoginPage'

const mockStartGoogleSignIn = jest.fn()
const mockStartLoginEmailPassword = jest.fn()

jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginEmailPassword: ({ email, password }) => {
    return () => mockStartLoginEmailPassword({ email, password })
  }
}))

// sobreescribiendo el comportamiento del dispatch de redux
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  // definicion de un estado inicial
  preloadedState: {
    auth: notAuthenticatedState
  }
})

describe('Pruebas en <LoginPage /> ', () => {
  beforeEach(() => jest.clearAllMocks())

  test('Debe mostrar el componente correctamente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getAllByText('Iniciar sesión')).toBeTruthy()
  })

  test('Boton Google debe llamar a startGoogleSignIn', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

    const button = screen.getByLabelText('btn-google')
    fireEvent.click(button)
    expect(mockStartGoogleSignIn).toHaveBeenCalled()
  })

  test('El submit debe llamar a startUserWithEmailPassword', () => {
    const user = {
      email: 'belu@belu.com',
      password: '123456'
    }

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

    const email = screen.getByRole('textbox', { name: 'Email' })
    const password = screen.getByTestId('password')
    const form = screen.getByTestId('form')
    fireEvent.change(email, { target: { name: 'email', value: user.email } })
    fireEvent.change(password, { target: { name: 'email', value: user.password } })
    fireEvent.submit(form)
    expect(mockStartLoginEmailPassword).toHaveBeenCalledWith({ ...user })
  })
})
