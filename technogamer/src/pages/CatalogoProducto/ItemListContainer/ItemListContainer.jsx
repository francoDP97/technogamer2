import React, { useEffect, useState } from 'react'
import pedirProductos from '../js/pedirProductos';
import ItemList from '../ItemList/ItemList';
import Category from '../Categoryfilter/Category';
import { useParams } from 'react-router-dom';
import './style.css'
function ItemListContainer() 
{
    const [productos, setProductos] = useState([]);
    const category = useParams().category;

    useEffect ( () => 
    {
        setTimeout(function(){
          pedirProductos()
            .then((res) => 
                {
                    category ? setProductos(res.filter((prod) => prod.category === category)) : setProductos(res);
                })
            }, 250);
    }, [category])
  
  return (
    <div className='color-fondo grid-layout'>
        <div className='flex-container-category'>
        <Category/> 
        </div>       
        <div className='flex-container'>
        <ItemList productos = {productos}/>
        </div>
    </div>
  )
}
export default ItemListContainer;