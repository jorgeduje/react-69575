import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import logo from "../../../assets/images/vite.svg";
import zapas from "../../../assets/images/images.jpg";
export const Navbar = () => {
  return (
    <nav className="title">
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HzPzt-rQk8R5yMw04HP35NtxavV-0l4n-A&s"
        alt=""
      /> */}
      {/* <img src="/vite.svg" alt="" /> */}
      {/* <img src={logo} alt="" />
      <img src={zapas} alt="" />
      <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1738883146/69575/images_mipccb.jpg"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1738883231/69575/images_utkeqd.png"
        alt=""
      /> */}
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
