// COPIA POR VALOR VS COPIA POR REFERENCIA

let a = 1;
let b = a;

console.log(a);
console.log(b);

a++;

console.log(a);
console.log(b);

let persona = {
  nombre: "pepe",
  edad: 22,
};

let personaCopia = persona;

console.log(persona);
console.log(personaCopia);

persona.edad += 5;

console.log(persona);
console.log(personaCopia);
let copiaBien = { ...persona }; // persona
console.log("--------");
persona.edad += 15;
console.log(persona);
console.log(copiaBien);

let numeros = [1, 5, 2];
let copiaNumeros = [...numeros];

copiaNumeros.push(122);

console.log(numeros);
console.log(copiaNumeros);
