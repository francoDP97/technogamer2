import { useContext } from "react";
import { Context } from "../Context/Context";
import { Container, Row, Col } from "react-bootstrap";

const CartElements = () => {
  const { cart, setCart } = useContext(Context);

  const deleteProducts = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((producto) => {
    return (
      <div className="product-card-container" key={producto.id}>
        <img src={producto.image} alt={producto.image} />
        <h3>{producto.name}</h3>
        <h3>${producto.price}</h3>
        <h3
          className="cart-delete-product"
          onClick={() => deleteProducts(producto.id)}
        >
          ❌
        </h3>
      </div>
    );
  });
};

export default CartElements;
