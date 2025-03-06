import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{}{}{}{}]

  const addToCart = (product) => {
    // setCart(product); // [] --> {}
    // setCart( [ product ] ); // [] --> [{}] --> [{}] --> [{}]

    let existe = cart.some((elemento) => elemento.id === product.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    resetCart,
    removeById,
    getTotalAmount,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
