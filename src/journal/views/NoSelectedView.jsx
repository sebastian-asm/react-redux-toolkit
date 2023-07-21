import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import DescriptionIcon from '@mui/icons-material/Description'

export default function NoSelectedView() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: '#eee', borderRadius: 2 }}
    >
      <Grid item>
        <DescriptionIcon sx={{ fontSize: 100, color: '#333' }} />
      </Grid>
      <Grid item>
        <Typography variant="h5">Selecciona o crea una nueva nota</Typography>
      </Grid>
    </Grid>
  )
}
