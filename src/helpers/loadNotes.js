import { collection, getDocs } from 'firebase/firestore/lite'

import { FirebaseDB } from '../firebase/config'

export const loadNotes = async (uid) => {
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
  const docs = await getDocs(collectionRef)

  let notes = []
  docs.forEach((doc) => notes.push({ id: doc.id, ...doc.data() }))
  return notes
}
