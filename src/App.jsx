import { useState } from 'react'
import './App.css'
import LogInPage from './pages/LogInPage'
import HomePage from './pages/HomePage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div className="min-h-screen">
      {isLoggedIn ? <HomePage /> : <LogInPage onLogin={handleLogin} />}
    </div>
  )
}

export default App
