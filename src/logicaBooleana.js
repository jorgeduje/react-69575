// or ||
// and &&

// if(condicion){
//     verdadero
// }else if(otra condicion){
//     verdadero
// }else{
//     falso
// }

// condicion ? verdadero : falso

// switch (key) {
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;

//     default:
//         break;
// }

// truthy ---> [] - {} - 123 - "dsadsa" -
// falsy --> 0 - null - NaN - undefined - ""
if ("") {
  console.log("hola");
} else {
  console.log("chau");
}

console.log("-----------");

// el OR devuelve el primer truthy o el ultimo falsy
let x = null || NaN || 0 || undefined;
console.log(x);
console.log("---------");

// el AND devuelve el primer fasly o el ultimo truthy
let y = "hola" && [] && {} && "juan" && { nombre: "pepe" };
console.log(y);
