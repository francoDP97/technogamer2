//import Navbar from './pages/Navbar/Navbar.jsx'
//import Homer from './pages/Homer/Homer.jsx'
//import './App.css'
import ItemListContainer from './pages/CatalogoProducto/ItemListContainer/ItemListContainer.jsx'
import ItemDetailConteiner from './pages/CatalogoProducto/ItemDetailConteiner/ItemDetailConteiner.jsx'

function App() {
  return (
    <>
      {/*<Navbar />
      <Homer />*/}
      {/*<ItemListContainer/>*/}
      <ItemDetailConteiner itemId={2}/>
    </>
  )
}

export default App
