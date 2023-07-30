import PropTypes from 'prop-types'

import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export default function ImageGallery({ images }) {
  return (
    <ImageList sx={{ width: '100%', height: 400 }} cols={4}>
      {images.map((image, index) => (
        <ImageListItem key={image}>
          <img src={image} alt={`Imagen ${index + 1}`} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired
}
