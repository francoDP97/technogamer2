import Item from "../Item/Item"
import { Row } from "react-bootstrap";

function ItemList({ productos }) {
    return (

        <Row className="gap-1" >
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        <Item key={producto.id} producto={producto} />
                    )
                })
            }
        </Row>
    )
}
export default ItemList;