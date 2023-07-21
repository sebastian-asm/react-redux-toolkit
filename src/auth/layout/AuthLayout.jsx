import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function AuthLayout({ children, title }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { sm: 500 } }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}
