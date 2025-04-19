import React from 'react'
import { Link } from 'react-router-dom'
import '../ItemListContainer/style.css'

function Category() {
  return (
    <div className='sidebar show'>
        <h3>Categorias</h3>
        <ul>
            <li><Link to="/productos">Todos los Productos</Link></li>
            <li><Link to="/productos/Accessories">Accesorios</Link></li>
            <li><Link to="/productos/Clothing">Vestimenta</Link></li>
            <li><Link to="/productos/Kitchen">Cocina</Link></li>
        </ul>
    </div>
  )
}

export default Category