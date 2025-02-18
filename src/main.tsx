import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './components/footer.tsx'
import Nav from './components/nav.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <App />
    <Footer />
  </StrictMode>,
)
