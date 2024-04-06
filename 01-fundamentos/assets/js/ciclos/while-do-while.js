

const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 99;
while( i < carros.length ) { // o carros[i]
    console.log( carros[i] );
    i++;
}

console.log('Do while');
let j = 2;
do {
    console.log( carros[j] );
    j++;
} while ( carros[j] ); // o j < carros.lenght