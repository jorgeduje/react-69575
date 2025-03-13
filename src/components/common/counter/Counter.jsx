import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";

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
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
