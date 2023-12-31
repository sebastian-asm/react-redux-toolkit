import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'

import { startLogout } from '../../store/auth'

export default function Navbar({ drawerWidth }) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <AppBar
      position="fixed"
      sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
    >
      <Toolbar>
        <IconButton color="inherit" sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">JorunalApp</Typography>
          <IconButton onClick={handleLogout} color="error">
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
}
