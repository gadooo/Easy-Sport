import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoute'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
  <BrowserRouter>
  <AppRoutes />
  </BrowserRouter>
  )
}

export default App
