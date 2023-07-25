import { Routes, Route, Navigate } from 'react-router-dom'

import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

export default function AppRouter() {
  const status = useCheckAuth()

  if (status === 'checking') return <CheckingAuth />

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
