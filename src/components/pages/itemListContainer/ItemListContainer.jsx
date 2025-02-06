import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isAdmin = true;
      if (isAdmin) {
        resolve(products);
      } else {
        reject({ message: "algo salio mal", status: 400 });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <h2>Mis productos</h2>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};
