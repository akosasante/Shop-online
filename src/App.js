import './App.css'
import React, { useState, useEffect } from 'react'

import Header from './Components/HeaderContent'
import Shopping from './pages/Shopping'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { checkShowMe } from './utils/api'

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function getLoggedInUser() {
      const user = await checkShowMe()
      if (user) {
        setUser(user)
      }
    }
    getLoggedInUser()
  }, [])

  function resetUser(wasLogoutSuccessful) {
    if (wasLogoutSuccessful) {
      setUser(undefined)
    }
  }

  return (
    <div>
      <Router>
        <header>
          <nav className='header_content'>
            <Header username={user?.name} />
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              exact
              path='/login'
              element={<Login afterLogin={setUser} />}
            />
            <Route exact path='/register' element={<Register afterRegister={setUser} />} />
            <Route exact path='/logout' element={<Logout afterLogout={resetUser} />} />
            <Route path='*' element={<Shopping />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
