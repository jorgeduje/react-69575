import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <FaShoppingCart />
      <h3>{cart.length}</h3>
    </div>
  );
};
