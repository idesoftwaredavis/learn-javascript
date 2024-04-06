class Persona {
    
    static _conteo = 0;
    static get getConteo(){return Persona._conteo + ' instancias'};

    // nombre = "";
    // codigo = "";
    // frase = "";
    constructor( nombre = "Sin nombre", codigo = "Sin codigo", frase = "Sin frase" ) {
        if( !nombre ) throw Error('Necesitamos el nombre');
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        Persona._conteo++;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo} `);
    }

    miFrase(){
        this.quienSoy();
        console.log(`Soy ${this.nombre} y mi frase es ${this.frase}`)   
    }

    set setComidaFavorita( comida ) {
        this.comida = comida;
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
}

const spiderman = new Persona("Peter Parker", "Spider", "Soy tu amigable vecino Spiderman");
const ironman   = new Persona("Iron", "Man", "Roberta");
// console.log(spiderman);
// console.log(ironman);

// ironman.setComidaFavorita = "Papas con mayo";
// console.log(ironman.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log( Persona.getConteo);

Persona.propiedadExterna = "Soy una propiedad externa";
console.log(Persona);