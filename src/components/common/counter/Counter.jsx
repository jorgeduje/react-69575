import { useState, useEffect } from "react";

const Counter = ({ darkMode }) => {
  const [contador, setContador] = useState(0);
  const [name, setName] = useState("pepe");
  const cambiarNombre = () => {
    setName("juan");
  };

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  // console.log("peticion fuera del effect");

  useEffect(() => {
    console.log("Una peticion a un servidor que esta en japón");
  }, [name, darkMode]); // array de dependencias

  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  );
};

export default Counter;
