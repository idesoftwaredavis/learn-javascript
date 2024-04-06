/**
 * Días de Semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9 
 */

// Entra a un sitio web, para consultar si está abierto hoy ...
const dia = 0; // 0: domingo ... 1: Lunes....
const horaActual = 2;

let horaApertura;
let mensaje;// Está abierto, Está cerrado, hoy abrimos a las XX

// if(dia === 0 || dia === 6)
// if( [0,6].includes( dia )){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Día de semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if (horaActual >= horaApertura){
//     mensaje = 'Está abierto';
// }else{
//     mensaje =  `Está cerrado, hoy abrimos a las ${horaApertura}` ;
// }

informacion = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({horaApertura, informacion});