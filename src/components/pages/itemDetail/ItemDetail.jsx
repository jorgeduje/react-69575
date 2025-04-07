import { useEffect, useState } from "react";

import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
<<<<<<< HEAD
import { collection, doc, getDoc } from "firebase/firestore";
=======
import { collection, getDoc, doc } from "firebase/firestore";
>>>>>>> clase-7/firebase-1

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
<<<<<<< HEAD

    const getProduct = getDoc(refDoc);
    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
=======
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
>>>>>>> clase-7/firebase-1
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
