import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    
    <Navbar />
    <Main />
    <img src={reactLogo} className="logo react" alt="React logo" />
    
    <div className="line"></div>
    <Footer />

      
    </>
  )
}

export default App
