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
        console.log(`Soy ${this.nombre} y mi frase es; ${this.frase}`)   
    }

    set setComidaFavorita( comida ) {
        this.comida = comida;
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
}

class Heroe extends Persona {
    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan = "Los avengers";
    }

    quienSoy(){
        console.log(`Soy ${this.nombre},  ${this.clan} `);
        super.quienSoy();
    }

}

// const spiderman = new Persona("Peter Parker", "Spider", "Soy tu amigable vecino Spiderman");

const spiderman = new Heroe();
spiderman.quienSoy();