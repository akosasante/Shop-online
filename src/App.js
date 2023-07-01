import './App.css'
import Header from './Components/HeaderContent'
import Shopping from './pages/Shopping'

function App() {
  return (
    <div>
      <header>
        <nav className='header_content'>
          <Header />
        </nav>
      </header>

    <main>
      <Shopping />
    </main>
    </div>
  )
}

export default App
