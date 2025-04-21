import Item from "../Item/Item"
import { Container, Row } from "react-bootstrap";

function ItemList ({productos}) {
  return ( 
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
  )
}
export default ItemList;