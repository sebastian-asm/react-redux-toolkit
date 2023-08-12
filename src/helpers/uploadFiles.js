export default async function uploadFiles(file) {
  try {
    const url = 'https://api.cloudinary.com/v1_1/dq4nlfvvn/upload'
    const formData = new FormData()
    formData.append('upload_preset', 'journal-app')
    formData.append('file', file)

    const resp = await fetch(url, {
      method: 'POST',
      body: formData
    })

    if (!resp.ok) throw new Error('Error al subir el archivo')
    const { secure_url } = await resp.json()
    return secure_url
  } catch {
    return null
  }
}
