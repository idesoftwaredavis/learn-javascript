function saludar( nombre ){
    console.log(arguments);
    console.log('Hola ', nombre);
    return 1;

    // nunca se ejecutara
    console.log('Soy un codigo que está despues del return');
}

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre );
}

const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) =>{
    console.log('Hola ' + nombre );
}

const retornoDeSaludar = saludar('Fern');
console.log('RETONO DE SALUDAR ' + retornoDeSaludar); // 1 or undefined


//saludar( 'Fernando', 40, true, 'Costa Rica');
//saludarFlecha();
//saludarFlecha2('Melissa');
 

