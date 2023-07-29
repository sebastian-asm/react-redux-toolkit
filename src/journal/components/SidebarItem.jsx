import { useMemo } from 'react'
import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import TurnedInNotIcon from '@mui/icons-material/TurnedInNot'

export default function SidebarItem({ title, body, id }) {
  const newTitle = useMemo(() => (title.length > 15 ? title.substring(0, 15) : title), [title])

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNotIcon />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
