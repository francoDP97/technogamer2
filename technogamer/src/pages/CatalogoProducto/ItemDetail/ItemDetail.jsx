import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'


function ItemDetail({ item }) {
  return (
    <div className='color-fondo grid-layout'>
      <Container className='d-flex'>
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
  )
}

export default ItemDetail