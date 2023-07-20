import { Routes, Route } from 'react-router-dom'

import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

export default function AppRouter() {
  return (
    <Routes>
      {/* ruta de login y register */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* jorunalApp */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}
