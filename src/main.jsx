import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { keycloak, initOptions } from './configs/keyclock.config'
import { ReactKeycloakProvider } from '@react-keycloak/web'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ReactKeycloakProvider>
)
