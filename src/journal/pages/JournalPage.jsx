import IconButton from '@mui/material/IconButton'

import AddIcon from '@mui/icons-material/Add'

import { NoSelectedView, NoteView } from '../views'
import JournalLayout from '../layout/JournalLayout'

export default function JournalPage() {
  return (
    <JournalLayout>
      <NoSelectedView />
      {/* <NoteView /> */}

      <IconButton
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
