//function crearPersona( nombre, apellido ) {
//    return {
//        nombre: nombre,
//        apellido: apellido
//    }
//}

const crearPersona = ( nombre, apellido ) =>  ({ nombre, apellido }) ;
const persona = crearPersona( 'fernando', 'herrera' );
console.log( persona );

function imprimeArgumentos(){
    console.log( arguments );
}

// los ' ... ' , cuando van en argumentos, significa parametro rest: Une todos los argumentos en una sola variable como un array
const imprimeArgumentos2 = ( edad, ...args ) =>{
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10,true,false,'Fernando','Hola');
console.log( {casado, vivo, nombre, saludo} );


const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrera');
console.log( nuevoApellido );

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: undefined,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}; 


// Desestructuración de argumentos
const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) =>{
   // edad = edad || 0;
    console.log(nombre);
     console.log(codeName);
      console.log(vivo);
       console.log(edad);
        console.log(trajes);
}

imprimePropiedades(tony);