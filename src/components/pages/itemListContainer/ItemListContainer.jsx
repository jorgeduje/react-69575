import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams(); // {x: 1, b: 2 } {}.c ---> undefined

  // undefined ---> home ---> ver todos
  // string ----> categoria --> quiero filtrar

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isAdmin = true;
      if (isAdmin) {
        resolve(
          name
            ? products.filter((elemento) => elemento.category === name)
            : products
        );
      } else {
        reject({ message: "algo salio mal", status: 400 });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <section>
      <h2>Mis productos</h2>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};
