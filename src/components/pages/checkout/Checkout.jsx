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
    <div>
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
    </div>
  );
};

export default Checkout;
