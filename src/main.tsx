import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PinkGlow } from './PinkGlow.tsx'
import './scss/_app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PinkGlow />
  </StrictMode>,
)
