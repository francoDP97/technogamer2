import React from 'react'

function ItemDetail({item}) {
  return (
    <div>
        <img src={item.image} />
        <div>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Categoria: {item.category}</p>
            <p>Descripcion: {item.description}</p>
            <p>Stock: {item.stock}</p>            
        </div>
    </div>
  )
}

export default ItemDetail