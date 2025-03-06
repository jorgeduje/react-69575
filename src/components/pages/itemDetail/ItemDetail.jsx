import { useEffect, useState } from "react";

import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams(); // { propiedad: valor }

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);

    const getProduct = getDoc(refDoc);
    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
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
