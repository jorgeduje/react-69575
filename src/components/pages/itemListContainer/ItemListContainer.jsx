import { useEffect, useState } from "react";

import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";

import { collection, addDoc, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    const getProducts = getDocs(refCollection);
    getProducts
      .then((res) => {
        const nuevoArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(nuevoArray);
      })
      .catch((error) => console.log(error));
  }, [name]);

  // const cargar = () => {
  //   let refCollection = collection(db, "products");
  //   products.forEach((product) => {
  //     addDoc(refCollection, product);
  //   });
  // };

  return (
    <section>
      {/* <button onClick={cargar}>cargar productos</button> */}
      <h2>Mis productos</h2>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};
