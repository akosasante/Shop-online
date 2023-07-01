import './App.css'
import React from 'react'
import Header from './Components/HeaderContent'
import Shopping from './pages/Shopping'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        <nav className='header_content'>
          <Header />
        </nav>
      </header>

      <main>
        <Router>
          <Routes>
            <Route
              exact
              path='/login'
              element={<Login afterLogin={() => {}} />}
            />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/logout' element={<Logout />} />
            <Route path='*' element={<Shopping />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
