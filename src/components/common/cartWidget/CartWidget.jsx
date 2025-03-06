import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <div>
      <FaShoppingCart />
      <h3>{total}</h3>
    </div>
  );
};
