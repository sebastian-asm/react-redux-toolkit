import PropTypes from 'prop-types'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import purpleTheme from './purpleTheme'

// HOC: high order component = componente que contendra mas componente hijos a traves del children
export default function AppTheme({ children }) {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.node.isRequired
}
