import { useMemo, useState } from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import Google from '@mui/icons-material/Google'

import { useForm } from '../../../hooks'
import { startGoogleSignIn, startLoginEmailPassword } from '../../store/auth'
import AuthLayout from '../layout/AuthLayout'

export default function LoginPage() {
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth)
  const [errorForm, setErrorForm] = useState(false)
  const { email, password, onInputChange, formState } = useForm({
    email: 'belu@belu.com',
    password: '123456'
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const handleSubmit = (e) => {
    e.preventDefault()
    const noValidForm = Object.values(formState).some((value) => value.trim() === '')
    if (noValidForm) return setErrorForm(true)
    setErrorForm(false)
    dispatch(startLoginEmailPassword({ email, password }))
  }

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Iniciar sesión">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
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
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>
                <Typography>Iniciar sesión</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear nueva cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
