import React from 'react'
//import './item.css'
import {Link} from "react-router-dom"
import {Card, Button, Container, Row, Col, CardTitle} from 'react-bootstrap';

function Item({producto}) {
  return (
        <Col sm={6} md={4} lg={3} className="mb-4">
                <Card >
                    <Card.Img variant='top' src={producto.image} />
                    <Card.Body>       
                        <Card.Title>{producto.name}</Card.Title>
                        <Card.Text>Precio: ${producto.price}</Card.Text>
                        {/* <p>Categoria: {producto.category}</p>
                        <p>Descripcion: {producto.description}</p>*/}
                        <Button className='me-2' as= {Link} to={`/item/${producto.id}`} variant='primary'>Ver Detalle</Button>
                        <Button variant="success">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
      </Col>     
  )
}

export default Item