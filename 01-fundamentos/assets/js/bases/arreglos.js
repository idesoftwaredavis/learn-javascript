// Forma de hacer un array
//const arr = new Array(10);
//const arr = [];
//console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({videoJuegos});
console.log(videoJuegos[1]);


let arregloCosas = [
    true,
    123,
    'Davis the best',
    1+2,
    function(){},
    ()=>{},
    {a:1}, // Objeto literal
    ['X','Megaman','Zero','Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]
];

let megaman = arregloCosas[7];

console.log(megaman[3]);
console.log(arregloCosas[7][4][1]);