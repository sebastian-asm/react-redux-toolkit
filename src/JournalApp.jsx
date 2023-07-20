import AuthRouter from './router/AppRouter'

import { AppTheme } from './theme'

export default function JournalApp() {
  return (
    <AppTheme>
      <AuthRouter />
    </AppTheme>
  )
}
