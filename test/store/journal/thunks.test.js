import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite'

import { addNewNote, savingNewNote, setActiveNote, startNewNote } from '../../../src/store/journal'
import { FirebaseDB } from '../../../src/firebase/config'

describe('Pruebas en Journal Thunks', () => {
  const dispatch = jest.fn()
  const getState = jest.fn()
  beforeEach(() => jest.clearAllMocks())

  test('startNewNote debe crear una nota vacia', async () => {
    const uid = 'test-uid'
    // mockReturnValue actua como sincronico
    // mockResolvedValue actua como asincronico (promesa)
    getState.mockReturnValue({ auth: { uid } })
    await startNewNote()(dispatch, getState)
    expect(dispatch).toHaveBeenCalledWith(savingNewNote())
    expect(dispatch).toHaveBeenCalledWith(
      addNewNote({
        body: '',
        title: '',
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: expect.any(Array)
      })
    )
    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: '',
        title: '',
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: expect.any(Array)
      })
    )

    // borrar recursivamente todas las notas de pruebas en firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)
    let deletePromises = []
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)))
    await Promise.all(deletePromises)
  })
})
