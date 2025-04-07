import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "steelblue",
        padding: "20px",
      }}
    >
      <Link to="/">Mi tienda</Link>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
        }}
      >
        <Link to="/category/deportivas">deportivas</Link>
        <Link to="/category/urbanas">urbanas</Link>
      </ul>
      {/* <a href="/cart">Carrito</a> */}
      <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
        <CartWidget />
      </Link>
    </nav>
  );
};
