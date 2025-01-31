import "./productCard.css";
export const ProductCard = ({ title, price }) => {
  // const { title, price } = props;

  return (
    <div className="container-card">
      <h3> {title} </h3>
      <h3> {price} </h3>
    </div>
  );
};

{
  /* <ProductCard title="titluo 1" price="precio 1" /> ---> {title:"titulo 1", price: "precio1"}
<ProductCard title="titulo 2" price="precio 2"  /> 
<ProductCard title="titulo 3" price="precio 3" />  */
}

// const sumar = (a, b )=>{
//   return a + b
// }

// sumar(1, 5 ) ---> 6
// sumar(2, 6) ---> 8
// sumar(2, 7) ---> 9
