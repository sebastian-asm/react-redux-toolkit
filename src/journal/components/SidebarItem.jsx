import { useMemo } from 'react'

import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import TurnedInNotIcon from '@mui/icons-material/TurnedInNot'

import { setActiveNote } from '../../store/journal'

export default function SidebarItem({ title, body, id, date, imageUrls = [] }) {
  const dispatch = useDispatch()

  const newTitle = useMemo(() => {
    return title.length > 15 ? `${title.substring(0, 15)}...` : title
  }, [title])

  const handleActiveNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }))
  }

  return (
    <ListItem onClick={handleActiveNote} disablePadding>
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
  id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  imageUrls: PropTypes.array
}
