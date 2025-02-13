import { HashLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";

const Users = () => {
  const {
    data: usuarios,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.org/users");

  return (
    <div>
      {isLoading ? (
        <HashLoader color="red" size={100} />
      ) : (
        <div>
          {usuarios.map((usuario) => {
            return (
              <div key={usuario.id}>
                <h2>{usuario.firstname}</h2>
                <h2>{usuario.email}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
