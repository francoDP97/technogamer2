import Navbar from './pages/Navbar/Navbar.jsx'
import Homer from './pages/Homer/Homer.jsx'
//import './App.css'
import ItemListContainer from './pages/CatalogoProducto/ItemListContainer/ItemListContainer.jsx'
import ItemDetailConteiner from './pages/CatalogoProducto/ItemDetailConteiner/ItemDetailConteiner.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homer/>}/>
        <Route path="/itemList" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailConteiner/>}/>      
      </Routes>      
    </BrowserRouter>
    </div>
  )
}

export default App
