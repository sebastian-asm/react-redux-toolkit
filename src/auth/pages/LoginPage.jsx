import { Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import Google from '@mui/icons-material/Google'

import { useForm } from '../../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'
import AuthLayout from '../layout/AuthLayout'

export default function LoginPage() {
  const dispatch = useDispatch()
  const { email, password, onInputChange } = useForm({
    email: 'belu@belu.com',
    password: '123456'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(checkingAuthentication())
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
              onClick={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              name="password"
              value={password}
              onClick={onInputChange}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                <Typography>Iniciar sesión</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={handleGoogleSignIn}>
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
