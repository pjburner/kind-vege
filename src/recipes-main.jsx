import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipesApp from './RecipesApp.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RecipesApp />
    </StrictMode>,
)
