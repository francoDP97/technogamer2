import Item from "../Item/Item"

function ItemList ({productos}) {
  return ( 
    <div>
        <h1>Catalogo de Productos</h1>
        <hr/>
        {
            productos.length > 0 &&
            productos.map((producto) => {
                return(
                    <Item key={producto.id} producto = {producto}/>
                )
            })          
        }
    </div>
  )
}
export default ItemList;