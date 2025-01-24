let auto = {
  marca: "audi",
  modeloDelAutoBlaBlaBla: 2023,
  puertas: 2,
};

// no importa el orden pero si importa el nombre
let { puertas, modeloDelAutoBlaBlaBla: mod } = auto;

console.log(mod);

// console.log(auto.marca);
// console.log(auto.marca);
// console.log(auto.puertas);

let personas = ["juan", "carmen", "pepe", "maria"];

// no importa el nombre pero si importa el orden
let [p1, p2, p3, p4] = personas;

console.log(p3);

let mascota = {
  nombre: "jack",
  edad: 4,
};

// DOT NOTATION
console.log(mascota.edad);

// BRACKET NOTATION
console.log(mascota["edad"]);

const libro = {
  autor: "pepe",
  paginas: 120,
  editorial: "bla bla bla",
};

libro.autor = "juan carlos";

console.log(libro);

const numeritos = [1, 5, 2];
numeritos.push(15);
console.log(numeritos);

numeritos = [];
