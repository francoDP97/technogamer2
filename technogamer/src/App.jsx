import Navbar from './pages/Navbar/Navbar.jsx'
import Homer from './pages/Homer/Homer.jsx'
import Footer from './pages/Footer/Footer.jsx'
import ItemListContainer from './pages/CatalogoProducto/ItemListContainer/ItemListContainer.jsx'
import ItemDetailConteiner from './pages/CatalogoProducto/ItemDetailConteiner/ItemDetailConteiner.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailConteiner />} />
        <Route path="/productos/:category" element={<ItemListContainer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
