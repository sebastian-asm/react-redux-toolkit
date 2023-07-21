import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import { Navbar, Sidebar } from '../components'

const drawerWidth = 240

export default function JournalLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired
}
