import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { handleRegister } from '../utils/api'


const Register = ({ afterRegister }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password || !name) return
    const user = { name, email, password }
    const { successful: responseSucceeded, user: loggedInUser } = await handleRegister(user)
    if (responseSucceeded) {
      setName('')
      setEmail('')
      setPassword('')
      afterRegister(loggedInUser)
      setRedirectToHome(true)
    }
  }

  if (redirectToHome) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>Name</label>
          <input
            type='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Register</button>
      </form>
      <p className='accountPar'>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}

export default Register
