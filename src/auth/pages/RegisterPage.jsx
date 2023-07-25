import { useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { startUserWithEmailPassword } from '../../store/auth/thunks'
import { useForm } from '../../hooks'
import { useState } from 'react'
import AuthLayout from '../layout/AuthLayout'

const initialValue = {
  displayName: 'belu',
  email: 'belu@belu.com',
  password: '123456'
}

export default function RegisterPage() {
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth)
  const { displayName, email, password, onInputChange, formState } = useForm(initialValue)
  const [errorForm, setErrorForm] = useState(false)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const handleSubmit = (e) => {
    e.preventDefault()
    const noValidForm = Object.values(formState).some((value) => value.trim() === '')
    if (noValidForm) return setErrorForm(true)
    setErrorForm(false)
    dispatch(startUserWithEmailPassword(formState))
  }

  return (
    <AuthLayout title="Crear nueva cuenta">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              onChange={onInputChange}
              value={displayName}
              name="displayName"
              label="Nombre"
              type="text"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              onChange={onInputChange}
              value={email}
              name="email"
              label="Email"
              type="email"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              onChange={onInputChange}
              value={password}
              name="password"
              label="Contraseña"
              type="password"
              fullWidth
            ></TextField>
          </Grid>

          {errorForm && (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert severity="warning">Debe completar todos los campos del formulario.</Alert>
            </Grid>
          )}

          {!!errorMessage && !errorForm && (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                <Typography>Crear cuenta</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
