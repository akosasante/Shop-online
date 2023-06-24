const rootUrl = 'https://node-course-e-commerce-8r2s.onrender.com'

export const handleRegister = async (user) => {
  try {
    const url = `${rootUrl}/api/v1/auth/register`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (response.ok) {
      console.log('Registration successful')
      return true
    } else {
      console.log('Registration failed')
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export const handleLogin = async (user) => {
  try {
    const url = `${rootUrl}/api/v1/auth/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (response.ok) {
      console.log('Login successful')
      const body = await response.json()
      return { successful: true, user: body.user }
    } else {
      console.log('Login failed')
      return { successul: false }
    }
  } catch (error) {
    console.log(error)
    return { successful: false }
  }
}

export const handleLogout = async () => {
  try {
    const url = `${rootUrl}/api/v1/auth/logout`
    const response = await fetch(url)

    if (response.ok) {
      console.log('Logout successful')
      return true
    } else {
      console.log('Logout failed')
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}
