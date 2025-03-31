import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.imageUrl} alt="" />
      <Counter item={item} />
    </div>
  );
};

export default ItemDetail;
