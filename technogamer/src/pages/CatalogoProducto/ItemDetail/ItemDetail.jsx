import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import Category from '../Categoryfilter/Category'
import '../ItemListContainer/style.css'

function ItemDetail({item}) {
  return (
    <>
    <h1 className="text-center">Detalle de Producto</h1>
    <hr/>  
    <div className='grid-layout'>
    <Category/>

  
    <Container className='d-flex justify-content-center'>  
    <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={item.image} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Precio: ${item.price}</Card.Text>
            <Card.Text>Categoria: {item.category}</Card.Text>
            <Card.Text>Descripcion: {item.description}</Card.Text>
            <Card.Text>Stock: {item.stock}</Card.Text>
            <Button variant="success">Agregar al carrito</Button>            
        </Card.Body>
    </Card>
    </Container>    
    </div>
    </>
  )
}

export default ItemDetail