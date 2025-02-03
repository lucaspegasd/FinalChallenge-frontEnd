import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import Theme from './styles/theme.js'
import GlobalStyles from './styles/global'

import { AuthProvider } from "./hooks/Auths.jsx";
import { AppProvider } from "./hooks/app.jsx";

import { Routes } from './Routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AuthProvider>
        <AppProvider>
         <Routes /> 
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
