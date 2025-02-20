import { Link } from "react-router";
import "./productCard.css";
export const ProductCard = ({ item }) => {
  return (
    <div className="container-card">
      <img style={{ width: "100px" }} src={item.imageUrl} alt="" />
      <h3> {item.title} </h3>
      <h3> {item.price} </h3>
      <Link to={`/itemDetail/${item.id}`}>Ver detalle</Link>
    </div>
  );
};
