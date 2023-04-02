import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { PetsProvider } from './contexts/PetsContext'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <PetsProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </PetsProvider>
        </AuthProvider>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
