import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { SidebarItem } from './'

export default function Sidebar({ drawerWidth }) {
  const { displayName } = useSelector((state) => state.auth)
  const { notes } = useSelector((state) => state.journal)

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant="h6">{displayName}</Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SidebarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
}
