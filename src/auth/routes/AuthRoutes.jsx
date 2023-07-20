import { Routes, Route, Navigate } from 'react-router-dom'

import { LoginPage, RegisterPage } from '../pages'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      {/* cualquier otra ruta no definida */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
