import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  // name me permite saber si quiero o no hacer un filtrado
  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", name)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta).then((res) => {
      let nuevoArray = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(nuevoArray);
    });
  }, [name]);

  // const cargarProductos = () => {
  //   let refCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(refCollection, elemento);
  //   });
  // };

  return (
    <section>
      <h2>Mis productos</h2>
      {/* <button onClick={cargarProductos}> Cargar muchos productos</button> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};
