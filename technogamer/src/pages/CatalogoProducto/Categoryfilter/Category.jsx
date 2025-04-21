import React from 'react'
import { Link } from 'react-router-dom'
import '../ItemListContainer/style.css'

function Category() {
  return (
    <div>
        <h3>Categorias</h3>
        <ul>
            <li><Link to="/productos">Todos los Productos</Link></li>
            <li><Link to="/productos/Accesorios">Accesorios</Link></li>
            <li><Link to="/productos/Periféricos">Periféricos</Link></li>
            <li><Link to="/productos/Streaming">Streaming</Link></li>
            <li><Link to="/productos/Hardware">Hardware</Link></li>
            
        </ul>
    </div>
  )
}

export default Category