import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div>
      <h1>Aca va ir el carrito</h1>
      <div
        style={{
          margin: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                border: "2px solid black",
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
                alignItems: "center",
              }}
            >
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <h3>x{product.quantity}</h3>
              <button onClick={() => removeById(product.id)}>Eliminar</button>
            </div>
          );
        })}
      </div>
      <h2>El total a pagar es ${total}</h2>
      <button onClick={resetCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
