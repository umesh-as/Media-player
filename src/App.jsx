import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import History from './pages/History.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      {/* Header */}
      <Header/>
      {/* Pages */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Routes>
      {/* Footer */}
      <Footer/>
    </>
  )
}

export default App
