import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    // nos conectamos con el backend
    console.log(userInfo);
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
