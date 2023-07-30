import { useMemo, useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import SaveIcon from '@mui/icons-material/Save'
import UploadOutlined from '@mui/icons-material/UploadOutlined'
import DeleteOutline from '@mui/icons-material/DeleteOutline'

import { ImageGallery } from '../components'
import { useForm } from '../../hooks'
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles
} from '../../store/journal'

export default function NoteView() {
  const dispatch = useDispatch()
  const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(note)
  const inputFileRef = useRef()

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [dispatch, formState])

  useEffect(() => {
    if (messageSaved !== '') {
      Swal.fire({
        icon: 'success',
        text: messageSaved
      })
    }
  }, [messageSaved])

  const dateString = useMemo(() => new Date(date).toUTCString(), [date])

  const handleSaveNote = () => {
    dispatch(startSaveNote())
  }

  const handleInputFile = ({ target }) => {
    if (target.files === 0) return
    dispatch(startUploadingFiles(target.files))
  }

  const handleDelete = () => {
    dispatch(startDeletingNote())
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={35} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          onChange={handleInputFile}
          ref={inputFileRef}
          type="file"
          multiple
          style={{ display: 'none' }}
        />
        <IconButton
          onClick={() => inputFileRef.current.click()}
          color="primary"
          disabled={isSaving}
        >
          <UploadOutlined />
        </IconButton>
        <Button onClick={handleSaveNote} disabled={isSaving} color="primary">
          <SaveIcon sx={{ mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container sx={{ mb: 2 }}>
        <TextField
          value={title}
          onChange={onInputChange}
          name="title"
          type="text"
          variant="filled"
          fullWidth
          label="Título"
          sx={{ mt: 2 }}
        />
        <TextField
          value={body}
          onChange={onInputChange}
          name="body"
          type="text"
          variant="filled"
          fullWidth
          label="Nota"
          multiline
          minRows="5"
          sx={{ mt: 2 }}
        />
      </Grid>
      <Grid container justifyContent="end">
        <Button onClick={handleDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
        </Button>
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  )
}
