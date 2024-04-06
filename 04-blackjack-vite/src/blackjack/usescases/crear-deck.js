import _ from 'underscore';

export const miNombre = 'Davis';

/**
 * Esta función crea un nuevo deck
 * 
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S'] 
 * @param {Array<string>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck de cartas
 */
const crearDesk = (tiposDeCarta, tiposEspeciales) =>{
if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
// if( tiposDeCarta.length > 0 ) throw new Error('TiposDeCarta tiene que ser un arreglo de string');


let deck = [];
    for( let i = 2; i<= 10; i++ ){
        for( let tipo of tiposDeCarta ){
            deck.push(i + tipo);    
        } 
    }

    for( let tipo of tiposDeCarta ){
        for( let especial of tiposEspeciales){
            deck.push(especial + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

export default crearDesk;
