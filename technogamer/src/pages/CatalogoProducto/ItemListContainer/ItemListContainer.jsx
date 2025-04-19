import React, { useEffect, useState } from 'react'
import pedirProductos from '../js/pedirProductos';
import ItemList from '../ItemList/ItemList';
import Category from '../Categoryfilter/Category';
import { useParams } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
import './style.css'
function ItemListContainer() 
{
    const [productos, setProductos] = useState([]);
    const category = useParams().category;
    const [titulo, setTitulo] = useState ("Catalogo de Productos")

    useEffect ( () => 
    {
        pedirProductos()
            .then((res) => 
                {
                    if (category){
                        setProductos (res.filter((prod) => prod.category === category));
                        setTitulo(category);
                    }else{
                        setProductos (res);
                        setTitulo("Catalogo de Producto");
                    }                    
                })
    }, [category])
  
  return (
    <div className='grid-layout'>
        <div className='flex-container-category'>
        <Category/> 
        </div>       
        <div className='flex-container'>
        <ItemList productos = {productos} titulo={titulo}/>
        </div>
    </div>
  )
}
export default ItemListContainer;