import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TanstackQueryClientProvider from './providers/QueryClient.provider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TanstackQueryClientProvider>
      <Toaster position='top-right'/>
      <App />
    </TanstackQueryClientProvider>
  </StrictMode>
)
