import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="title">
      <h2>Mi tienda</h2>
      <ul>
        <li>categoria 1 </li>
        <li>categoria 2</li>
        <li>categoria 3</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
// export default Navbar;

// const sumar = () => {
//   return 5 + 2 + 5;
// };

// sumar() ---> 12
// Navbar( ) --->
// <Navbar /> --->   <nav>
//       <h2>Mi tienda</h2>
//       <ul>
//         <li>categoria 1 </li>
//         <li>categoria 2</li>
//         <li>categoria 3</li>
//       </ul>
//       <h5>Icono de un carrito</h5>
//     </nav>
