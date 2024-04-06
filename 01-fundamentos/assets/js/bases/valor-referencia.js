// Todos los objetos se pasan por referencia
let a = 10;
let b = a;

a = 30; 

console.log({a, b});

let juan = { nombre: ' Juan' };
let ana  = {...juan}; // Operador Spread: Separa los elementos. Rompe la referencia que hay en JS para que apunten en diferentes espacios en memoria
ana.nombre = 'Ana';

console.log({juan,ana});

const cambiaNombre =  ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({peter,tony});

// Arreglos
const frutas = ['Manzana','Pera','Piña'];

//const otrasFrutas = [...frutas];
const otrasFrutas = frutas.slice();

otrasFrutas.push('Mango');

console.table( {frutas, otrasFrutas });
