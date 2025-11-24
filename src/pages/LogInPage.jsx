import React from 'react'



function LogInPage({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    if (onLogin) onLogin()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#67e8f9] text-slate-900 flex items-center justify-center px-4 py-10">
    
    </div>
  )
}

export default LogInPage
