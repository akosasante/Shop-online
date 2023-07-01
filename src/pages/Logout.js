import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { handleLogout } from '../utils/api'

const Logout = ({ afterLogout }) => {
  const [redirectToHome, setRedirectToHome] = useState(false)

  const logout = async () => {
    const { successful: responseSucceeded } = await handleLogout()
    afterLogout(responseSucceeded)
    if (responseSucceeded) {
      setRedirectToHome(true)
    }
  }

  if (redirectToHome) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <h4>If you want to log out please press the button</h4>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout
