let juegos  = ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[ juegos.length - 1];

console.log(primero, ultimo);

// Recorrer un array
juegos.forEach( (elemento, indice, arr) => {
    console.log( {elemento, indice, arr} );
});

// Insertar un elemento
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log(nuevaLongitud, juegos);

// Insertar un elemento en la 1° Posicion
juegos.unshift('Davis');
console.log(juegos);

let juegoBorrado = juegos.pop();
console.log('Juego Borrado', juegoBorrado, juegos);

// Borrar elemento/s a partir de una posición
let juegosBorrados = juegos.splice(0, 1);
console.log({juegosBorrados, juegos});

// Borrar elemento a partir de un indice
let metroidIndex = juegos.indexOf('Metroid'); // CaseSensitive
console.log(metroidIndex);