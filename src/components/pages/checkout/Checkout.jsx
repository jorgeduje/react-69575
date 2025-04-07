<<<<<<< HEAD
import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
=======
import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
>>>>>>> clase-7/firebase-1
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

<<<<<<< HEAD
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    let total = getTotalAmount();
    let ordersCollection = collection(db, "orders");
    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let promesaCompra = addDoc(ordersCollection, order);
    promesaCompra.then((res) => {
=======
  // false y true
  // falsy --> null NaN undefined "" 0
  // truthy --> "dsada" 123 [] {}
  // if(){

  // }
  const [orderId, setOrderId] = useState(null); // "dsadasdsad"

  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

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

    addDoc(ordersCollection, order).then((res) => {
>>>>>>> clase-7/firebase-1
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");

<<<<<<< HEAD
    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
=======
    order.items.forEach((product) => {
      let refDoc = doc(productsCollection, product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
>>>>>>> clase-7/firebase-1
    });
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target; // {}
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
<<<<<<< HEAD
    <div>
      {orderId ? (
        <h2>tu numero de compra es {orderId}</h2>
      ) : (
        <form onSubmit={funcionFormulario}>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={funcionInputs}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={funcionInputs}
          />
          <input
            type="text"
            placeholder="telefono"
            name="telefono"
            onChange={funcionInputs}
          />
          <button>Enviar</button>
          <button type="button">cancelar</button>
        </form>
      )}
      {/* {orderId && <h2>tu numero de compra es {orderId}</h2>} */}
=======
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {orderId ? (
        <h2>Gracias por tu compra, tu comprobante es: {orderId}</h2>
      ) : (
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
      )}
>>>>>>> clase-7/firebase-1
    </div>
  );
};

export default Checkout;
