import { useState } from "react";
import Item from "../Item/Item"
import { Container, Row, Col } from "react-bootstrap";

function ItemList ({productos, titulo}) {
    const [busqueda, setBusqueda] = useState("")
  return ( 
  <>

    <Container className="my-4">
  

        <Row>
         
        {
            productos.length > 0 &&
            productos.map((producto) => {
                return(
                    <Item key={producto.id} producto = {producto}/>
                )
            })          
        }

        </Row>
    </Container>
    </>
  )
}
export default ItemList;