import Navbar from './components/Navbar/Navbar.jsx'
import Homer from './pages/Homer/Homer.jsx'
import Footer from './components/Footer/Footer.jsx'
import ItemListContainer from './pages/CatalogoProducto/ItemListContainer/ItemListContainer.jsx'
import ItemDetailConteiner from './pages/CatalogoProducto/ItemDetailConteiner/ItemDetailConteiner.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
        <Route path="/productos/:category/:subcategory" element={<ItemListContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
