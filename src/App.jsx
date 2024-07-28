import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Prouducts from './pages/Prouducts'
import About from './pages/About'
import NavBar from './components/NavBar'
import NonFound from './pages/NonFound'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Prouducts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NonFound />} />
      </Routes>
    </>
  )
}

export default App
