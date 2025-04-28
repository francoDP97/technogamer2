import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const buyProducts = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id);

    if (productrepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productrepeat.stock + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <Context.Provider value={{ cart, setCart, buyProducts }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
