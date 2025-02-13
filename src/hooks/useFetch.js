import { useEffect, useState } from "react";

export const useFetch = (endpoint, valorInicial = []) => {
  const [data, setData] = useState(valorInicial);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = fetch(endpoint);
    setTimeout(() => {
      getData
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch(() => setError({ status: 500, message: "Error en el servidor" }))
        .finally(() => setIsLoading(false));
    }, 2000);
  }, [endpoint]);

  return { data, isLoading, error };
};

// useFetch(" sdadasd/users")
// useFetch(" sdadasd/comments")
// useFetch(usuarios )
// useFetch(comentarios)

// // funcion
// export const sumar = () => {

//   return 12 + 12;
// };

// // componentes
// export const Home = () => {
//   return <h2>hola</h2>;
// };

// // hook
// export const useFetch = () => {
//     // cosas de react
//     // state
//     // effect
//   return  {message: "salio todo okey", data: []}
// };

// const sumar = (a = 0, b = 0) => {
//   return a + b;
// };

// sumar(2, 5);
// sumar(4);
