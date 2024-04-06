const elMayor = (a, b) => ( a > b ) ? a : b;

console.log( elMayor(20,15 ) );

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dólares' : '10 Dólares';

console.log( tieneMembresia(false) );

const amigo = false;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (()=> 'Nick fury')(), // función anónima autoinvocada
    elMayor(10,15)
];

console.log( amigoArr );

const nota = 91; // A+ a B+
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C': 'F';

console.log({nota, grado});