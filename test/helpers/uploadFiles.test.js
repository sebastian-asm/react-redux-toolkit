import { v2 as cloudinary } from 'cloudinary'

import uploadFiles from '../../src/helpers/uploadFiles'

// eslint-disable-next-line no-undef
const { CI_API_KEY, CI_API_SECRET } = process.env
cloudinary.config({
  cloud_name: 'dq4nlfvvn',
  api_key: CI_API_KEY,
  api_secret: CI_API_SECRET,
  secure: true
})

describe('Prueba en uploadFiles', () => {
  test('Debe subir el archivo correctamente', async () => {
    const imgUrl = 'https://th.bing.com/th/id/OIP.q86T2esYe207gNMd1kBE_gHaE6?pid=ImgDet&rs=1'
    const resp = await fetch(imgUrl)
    const blob = await resp.blob()
    const file = new File([blob], 'foto.jpg')

    const url = await uploadFiles(file)
    expect(typeof url).toBe('string')

    // eliminando la imagen de prueba para el test en cloudinary
    const segments = url.split('/')
    const imgId = segments.at(-1).replace('.jpg', '')
    await cloudinary.api.delete_resources(`journal/${imgId}`, {
      resource_type: 'image'
    })
  })

  test('Debe retornar null', async () => {
    const file = new File([], 'foto.jpg')
    const url = await uploadFiles(file)
    expect(url).toBe(null)
  })
})
