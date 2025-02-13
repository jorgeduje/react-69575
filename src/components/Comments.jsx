import { HashLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";

const Comments = () => {
  const {
    data: comentarios,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.org/comments");
  console.log(isLoading);
  return (
    <div>
      {isLoading ? (
        <HashLoader />
      ) : (
        <div>
          {comentarios.map((comentario) => {
            return (
              <div key={comentario.id} style={{ marginBottom: "20px" }}>
                <h2>{comentario.comment}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comments;

// const getComments = fetch("https://jsonplaceholder.org/comments", {
//     method: "POST",
//     body: JSON.stringify({ id: 3, postId: 3, userId: 2, comment: "hola como estas" }),
//     headers: {
//         "authorization": "Barer dsadsdasdsadsad123123dsadas1321"
//     }
//   });

// const useState = ( valorInicial ) => {
//     const variable = valorInicial
//     return [ variable, ()=>{}]
// }

// const [contador, funcion ] = useState( 15 )
