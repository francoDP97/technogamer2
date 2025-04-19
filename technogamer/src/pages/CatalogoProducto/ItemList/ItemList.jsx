import { useState } from "react";
import Item from "../Item/Item"
import { Container, Row, Col } from "react-bootstrap";

function ItemList ({productos, titulo}) {
    const [busqueda, setBusqueda] = useState("")
  return ( 
  <>

    <Container className="my-4">
        <h1 className="text-center">{titulo}</h1>
        <hr/>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <hr/>  

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