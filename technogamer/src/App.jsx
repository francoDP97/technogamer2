import Navbar from "./pages/Navbar/Navbar.jsx";
import Homer from "./pages/Homer/Homer.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import ItemListContainer from "./pages/CatalogoProducto/ItemListContainer/ItemListContainer.jsx";
import ItemDetailConteiner from "./pages/CatalogoProducto/ItemDetailConteiner/ItemDetailConteiner.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import "./App.css";
import CartContent from "./components/CartContent/CartContent.jsx";
import ContextProvider from "./components/Context/Context.jsx";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailConteiner />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route
            path="/productos/:category/:subcategory"
            element={<ItemListContainer />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/src/components/CartContent/CartContent.jsx"
            element={<CartContent />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
