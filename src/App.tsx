import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { PetsProvider } from './contexts/PetsContext'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <PetsProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PetsProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
