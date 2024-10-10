import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/app.component.tsx'
import './main.scss'
import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
