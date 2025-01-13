import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TanstackQueryClientProvider from './providers/QueryClient.provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TanstackQueryClientProvider>
      <App />
    </TanstackQueryClientProvider>
  </StrictMode>
)
