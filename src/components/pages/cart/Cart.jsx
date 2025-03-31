import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";

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
                border: "2px solid steelblue",
                display: "flex",
                justifyContent: "space-between",
                width: "400px",
                alignItems: "center",
                padding: "12px",
              }}
            >
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <h3>x{product.quantity}</h3>
              <Button variant="outlined" onClick={() => removeById(product.id)}>
                Eliminar
              </Button>
            </div>
          );
        })}
      </div>
      <h2>El total a pagar es ${total}</h2>
      <Button variant="outlined" onClick={resetCart}>
        Vaciar carrito
      </Button>
      <Button variant="contained">
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
          }}
          to="/checkout"
        >
          Finalizar compra
        </Link>
      </Button>
    </div>
  );
};

export default Cart;
