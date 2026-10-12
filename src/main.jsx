import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ErrorBoundries from './components/ErrorBoundries.jsx'

createRoot(document.getElementById('root')).render(

  <ErrorBoundries>
    <ThemeProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ThemeProvider>
  </ErrorBoundries>
)
