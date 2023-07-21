import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import SaveIcon from '@mui/icons-material/Save'

import { ImageGallery } from '../components'

export default function NoteView() {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={35} fontWeight="light">
          11/11/2023
        </Typography>
      </Grid>
      <Grid item>
        <Button>
          <SaveIcon sx={{ color: '#333', mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container sx={{ mb: 2 }}>
        <TextField type="text" variant="filled" fullWidth label="Título" sx={{ mt: 2 }} />
        <TextField type="text" variant="filled" fullWidth label="Nota" multiline minRows="5" sx={{ mt: 2 }} />
      </Grid>
      <ImageGallery />
    </Grid>
  )
}
