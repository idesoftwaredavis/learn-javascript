// Patrón modulo.
// Función anónima autoinvocada.
const miModulo = (() => {
    'use strict'

    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    // Referencias del HTML
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const puntosHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');

    let puntosJugadores = [];

    // Esta función inicializa el juego
    const inicializarJuego = ( numJugadores = 2 ) =>{
        deck = crearDesk();
        puntosJugadores = [];
        for( let i = 0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerText = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta función crea un nuevo Deck
    const crearDesk = () =>{
            deck = [];
            for( let i = 2; i<= 10; i++ ){
                for( let tipo of tipos ){
                    deck.push(i + tipo);    
                } 
            }
        
            for( let tipo of tipos ){
                for( let especial of especiales){
                    deck.push(especial + tipo);
                }
            }
            return _.shuffle( deck );
    }

    // Esta función me permite tomar una carta
    const pedirCarta = () => { 
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    let carta = deck.pop();
    delete deck[carta];
    
    return carta; 
    }

    // Valor de la carta
    const valorCarta = ( carta ) =>{
        const valor = carta.substring(0,carta.length - 1); // Elimino la letra
        return ( isNaN( valor ) ) ?
                ( valor === 'A' ) ? 11 : 10
                : valor *1;
    }   

    const crearCarta = ( carta, turno ) =>{
        const imgHTML = document.createElement('img');
        imgHTML.src=`assets/cartas/${carta}.png`;
        imgHTML.classList.add('carta');
        divCartasJugadores[turno].append(imgHTML);
    }

    // Turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = ( carta, turno ) =>{   
            puntosJugadores[ turno ] = puntosJugadores[turno] + valorCarta( carta );
            puntosHTML[ turno ].innerText = puntosJugadores[ turno ];

            return puntosJugadores[ turno ];
    }

    // Turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1)
            crearCarta(carta, puntosJugadores.length - 1);

        }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        
    }

    const mostrarGanador = () =>{
        const [ puntosJugador, puntosComputadora ] = puntosJugadores;
 
        setTimeout(() => {
            if(puntosJugador > 21 || puntosJugador < puntosComputadora && puntosComputadora < 21 ){
                
                window.alert("Jugador ha perdido la partida");
                btnPedir.disabled = true;
                btnDetener.disabled = true;
                turnoComputadora( puntosJugador );
            }
            
            if( puntosJugador == 21 || puntosComputadora > 21){
                turnoComputadora( puntosJugador );
                window.alert("Jugador ha ganado la partida");
                btnPedir.disabled = true;
                btnDetener.disabled = true;
            }

            if(puntosJugador == puntosComputadora){
                turnoComputadora( puntosJugador );
                window.alert("Se ha empatado. Nadie gana");
                btnPedir.disabled = true;
                btnDetener.disabled = true;
            }
        }, 100);
    }

    // Eventos
    btnPedir.addEventListener('click', () =>{
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta( carta, 0 );
        mostrarGanador();
    })

    btnDetener.addEventListener('click', () =>{
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0]);
        mostrarGanador();
    
    })

    btnNuevo.addEventListener('click', () =>{
        inicializarJuego();
    })


    return {
        miModulo: inicializarJuego
    }

})();



