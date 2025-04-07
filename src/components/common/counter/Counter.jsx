import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Box, Button } from "@mui/material";

const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > contador) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let obj = { ...item, quantity: contador };
    addToCart(obj);
    toast.success("Producto agregado al carrito", { duration: 5000 });
  };

  return (
    <div style={{ padding: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "200px",
          marginBottom: "20px",
        }}
      >
        <Button variant="contained" onClick={restar}>
          restar
        </Button>
        <h2>{contador}</h2>
        <Button variant="contained" onClick={sumar}>
          Sumar
        </Button>
      </Box>
      <Button variant="contained" onClick={onAdd}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
