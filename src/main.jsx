import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <MantineProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </MantineProvider>
    </Provider>
  </BrowserRouter>
)
