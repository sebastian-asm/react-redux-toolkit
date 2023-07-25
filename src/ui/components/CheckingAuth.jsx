import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

export default function CheckingAuth() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid item>
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  )
}
