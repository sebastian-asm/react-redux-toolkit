import { Link as RouterLink } from 'react-router-dom'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import AuthLayout from '../layout/AuthLayout'

export default function RegisterPage() {
  return (
    <AuthLayout title="Crear nueva cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField label="Nombre" type="text" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField label="Email" type="email" fullWidth></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <TextField label="Contraseña" type="password" fullWidth></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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
