import React from 'react'
import './item.css'

function Item({producto}) {
  return (
    <div className='card'>
        <img src={producto.image} />
        <div>
            <h3>{producto.name}</h3>
            <p>Precio: ${producto.price}</p>
            <p>Categoria: {producto.category}</p>
            <p>Descripcion: {producto.description}</p>
            <a href={`./Item/${producto.id}`}>ver mas</a>
        </div>
    </div>
  )
}

export default Item