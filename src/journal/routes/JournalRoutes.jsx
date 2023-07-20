import { Routes, Route, Navigate } from 'react-router-dom'

import JournalPage from '../pages/JournalPage'

export default function JorunalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
