

let a = 10;


if (a >= 10 ) { // undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy  = new Date();
let dia = hoy.getDay();
console.log({dia});

if ( dia === '0' ){
    console.log('Domingo');
} else if ( dia === 1 ){
    console.log('Lunes');
} else {
    console.log('No es lunes, martes o domingo...');
}

// Ejercicio express
// Sin usar If Else, o Switch, únicamente objetos

// Día de la semana (Desde el domingo hasta el Sábado)

let semana ={
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes'
}
const diaSemana = ( numeroDia ) => (semana[numeroDia]);

console.log(diaSemana(5) || 'Día no definido');



