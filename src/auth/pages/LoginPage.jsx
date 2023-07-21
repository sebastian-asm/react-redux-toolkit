import { Link as RouterLink } from 'react-router-dom'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import Google from '@mui/icons-material/Google'

import AuthLayout from '../layout/AuthLayout'

export default function LoginPage() {
  return (
    <AuthLayout title="Iniciar sesión">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField label="Email" type="email" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField label="Contraseña" type="password" fullWidth></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Typography>Iniciar sesión</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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
