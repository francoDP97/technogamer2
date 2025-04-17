import React, { useEffect, useState } from 'react'
import pedirProductos from '../js/pedirProductos';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() 
{
    const [productos, setProductos] = useState([]);

    useEffect ( () => 
    {
        pedirProductos()
            .then((res) => 
                {
                    setProductos (res);
                })
    }, [])
  
  return (
    <div>        
        <ItemList productos = {productos}/>
    </div>
  )
}
export default ItemListContainer;