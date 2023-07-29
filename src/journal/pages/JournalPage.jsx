import { useDispatch, useSelector } from 'react-redux'

import IconButton from '@mui/material/IconButton'

import AddIcon from '@mui/icons-material/Add'

import { NoSelectedView, NoteView } from '../views'
import { startNewNote } from '../../store/journal'
import JournalLayout from '../layout/JournalLayout'

export default function JournalPage() {
  const dispatch = useDispatch()
  const { isSaving, active } = useSelector((state) => state.journal)

  const handleNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NoSelectedView />}
      <IconButton
        onClick={handleNewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: '#fff',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main' },
          position: 'fixed',
          bottom: 50,
          right: 50
        }}
      >
        <AddIcon />
      </IconButton>
    </JournalLayout>
  )
}
