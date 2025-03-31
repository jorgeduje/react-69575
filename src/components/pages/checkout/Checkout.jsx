import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const { cart, getTotalAmount } = useContext(CartContext);

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    // nos conectamos con el backend
    let ordersCollection = collection(db, "orders");

    // la info del comprador
    // la info de lo que estoy comprando
    // la info de lo que estoy pagando

    let totalAmount = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total: totalAmount,
    };

    addDoc(ordersCollection, order);
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target; // {}
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={funcionFormulario}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "20px",
        }}
      >
        <TextField
          variant="outlined"
          type="text"
          label="nombre"
          name="nombre"
          onChange={funcionInputs}
        />
        <TextField
          variant="outlined"
          type="text"
          label="email"
          name="email"
          onChange={funcionInputs}
        />
        <TextField
          variant="outlined"
          type="text"
          label="telefono"
          name="telefono"
          onChange={funcionInputs}
        />
        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant="outlined" type="button">
          cancelar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
