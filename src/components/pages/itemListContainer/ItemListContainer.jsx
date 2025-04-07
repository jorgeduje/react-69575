import { useState } from "react";

export const ItemListContainer = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
  });

  const funcionDelForm = (event) => {
    event.preventDefault();
    console.log(userInfo);
  };
  const funcionDeLosInputs = (event) => {
    const { value, name } = event.target;
    // console.log("lo que escribo ", value);
    // console.log("donde lo escribo", name); // "apellido"
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={funcionDelForm}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          name="nombre"
          onChange={funcionDeLosInputs}
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          name="apellido"
          onChange={funcionDeLosInputs}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

// const persona ={
//   edad: 22
// }
// const {edad} = persona
// edad
