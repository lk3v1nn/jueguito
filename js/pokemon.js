// @ts-nocheck
window.addEventListener('load', iniciarJuego);

let ListaDePokemons = ['Charmander', 'Vaporeon', 'Bulbasour', 'Volcanion', 'Rattata', 'Sydos'];
let listaAtaquesDisponibles = ['Fuego 🔥', 'Agua 💧', 'Tierra 🪴'];
let pokemonJugador;
let pokemonEnemigo;
let ataqueJugador;
let ataqueEnemigo;
let resultadoBatalla;
let vidasJugador = 3;
let vidasEnemigo = 3;

let botonIniciar = document.getElementById('botonIniciar');
let buttonReiniciar = document.getElementById('boton-reiniciar');

let boton_seleccionar_pokemon = document.getElementById('boton-seleccionar-pokemon');
let imgPokemonJugador = document.getElementById('imagen-pokemon-jugador');

let spanPokemonEnemigo = document.getElementById('nombre-pokemon-enemigo');
let imgPokemonEnemigo = document.getElementById('imagen-pokemon-enemigo');

let botonFuego = document.getElementById('boton-fuego');
let botonAgua = document.getElementById('boton-agua');
let botonTierra = document.getElementById('boton-tierra');

let spanVidasJugador = document.getElementById('vidas-jugador');
let spanVidasEnemigo = document.getElementById('vidas-enemigo');

let divAtaqueJugador = document.getElementById('ataque-jugador');
let divAtaqueEnemigo = document.getElementById('ataque-enemigo');
let divResultado = document.getElementById('resultado');

let seccionMensajes = document.getElementById('ganador');

function iniciarJuego(){
    botonIniciar.addEventListener('click', ()=>{
        botonIniciar.style.display = 'none';
        ajustarBody();
        SeleccionarPokemonJugador();
    });

    buttonReiniciar.addEventListener('click', reinciarJuego);
}

function ajustarBody(){
    document.querySelector('body').style.height = 'auto';
}

function SeleccionarPokemonJugador(){
    document.getElementById('seleccionar-monstruo').style.display = 'flex';

    function buscarPokemonSeleccionado(){
    pokemonJugador = document.getElementById('Charmander').checked? 'Charmander' :
                    document.getElementById('Vaporeon').checked? 'Vaporeon' :
                    document.getElementById('Bulbasour').checked? 'Bulbasour' :
                    document.getElementById('Volcanion').checked? 'Volcanion' :
                    document.getElementById('Rattata').checked? 'Rattata' :
                    document.getElementById('Sydos').checked? 'Sydos' : '';
    }

    boton_seleccionar_pokemon.addEventListener('click', () => {
        buscarPokemonSeleccionado();
        spanNombrePokemon = document.getElementById('nombre-pokemon-jugador').innerHTML = pokemonJugador;
        imgPokemonJugador.src = `img/${pokemonJugador}.png`;
        deshabilitarSelectPokemon();});
    // let Charmander = document.getElementById('Charmander');
    // let Vaporeon = document.getElementById('Vaporeon');
    // let Bulbasour = document.getElementById('Bulbasour');
    // let Volcanion = document.getElementById('Volcanion');
    // let Rattata = document.getElementById('Rattata');
    // let Sydos = document.getElementById('Sydos');
    // let spanNombrePokemon = document.getElementById('nombre-pokemon-jugador');

    // function asignarPokemonALaVista(){
    //     spanNombrePokemon.innerHTML = pokemonJugador;
    //     deshabilitarSelectPokemon();
    // }

    // Charmander.addEventListener('click', () =>{
    //     pokemonJugador = "Charmander";
    //     asignarPokemonALaVista();
    // });
    // Vaporeon.addEventListener('click', () =>{
    //     pokemonJugador = "Vaporeon";
    //     asignarPokemonALaVista(pokemonJugador);
    // });
    // Bulbasour.addEventListener('click', () =>{
    //     pokemonJugador = "Bulbasour";
    //     asignarPokemonALaVista(pokemonJugador);
    // });
    // Volcanion.addEventListener('click', () =>{
    //     pokemonJugador = "Volcanion";
    //     asignarPokemonALaVista(pokemonJugador);
    // });
    // Rattata.addEventListener('click', () =>{
    //     pokemonJugador = "Rattata";
    //     asignarPokemonALaVista(pokemonJugador);
    // });            
    // Sydos.addEventListener('click', () =>{
    //     pokemonJugador = "Sydos";
    //     asignarPokemonALaVista(pokemonJugador);
    // });    
}

function deshabilitarSelectPokemon(){
    if (pokemonJugador == ''){ 
        alert('Debes seleccionar un pokemon');
    }else {
        document.getElementById('seleccionar-monstruo').style.display = 'none';
        SeleccionarPokemonEnemigo();
        ElegirAtaquePokemon();
    }
}

function SeleccionarPokemonEnemigo(){
    let numeroRandom = parseInt(Math.random()*6);

    pokemonEnemigo = ListaDePokemons[numeroRandom];

    spanPokemonEnemigo.innerHTML = pokemonEnemigo;  

    imgPokemonEnemigo.src = `img/${pokemonEnemigo}.png`;
}

function ElegirAtaquePokemon(){
    document.getElementById('seleccionar-ataque').style.display = 'flex';
    mensajeDeVoz('Escoge un ataque');

    botonFuego.addEventListener('click', ()=>{
        ataqueJugador = listaAtaquesDisponibles[0];
        ElegirAtaquePokemonEnemigo();
        CombatePokemon(ataqueJugador, ataqueEnemigo);
    });
    
    botonAgua.addEventListener('click', ()=>{
        ataqueJugador = listaAtaquesDisponibles[1];
        ElegirAtaquePokemonEnemigo();
        CombatePokemon(ataqueJugador, ataqueEnemigo);
    });
    
    botonTierra.addEventListener('click', ()=>{
        ataqueJugador = listaAtaquesDisponibles[2];
        ElegirAtaquePokemonEnemigo();
        CombatePokemon(ataqueJugador, ataqueEnemigo);
    });
}

function ElegirAtaquePokemonEnemigo(){
    let numeroRamdon = parseInt(Math.random()*3);
    ataqueEnemigo = listaAtaquesDisponibles[numeroRamdon];
}

function CombatePokemon(ataqueJugador, ataqueEnemigo){
    // agua fuego       WIN
    // agua tierra      LOSE
    // fuego tierra     WIN
    // Fuego agua       LOSE
    // tierra agua      WIN
    // tierra fuego     LOSE

    if (ataqueJugador == ataqueEnemigo){
        resultadoBatalla = 'EMPATE';
    } 
    else if (ataqueJugador == listaAtaquesDisponibles[1] && ataqueEnemigo == listaAtaquesDisponibles[0] ||
                ataqueJugador == listaAtaquesDisponibles[0] && ataqueEnemigo == listaAtaquesDisponibles[2] ||
                ataqueJugador == listaAtaquesDisponibles[2] && ataqueEnemigo == listaAtaquesDisponibles[1] ){
        resultadoBatalla = 'GANASTE!';
        controlVidasEnemigo(-1);
    }
    else {
        resultadoBatalla = 'GANO EL ENEMIGO';
        controlVidasJugador(-1);
    }
    CrearMensajesCombate();
    revisarGanador();
}

function controlVidasJugador(vida){
    vidasJugador += vida;
    spanVidasJugador.innerHTML = vidasJugador + (' Vidas');
}

function controlVidasEnemigo(vida){
    vidasEnemigo += vida;
    spanVidasEnemigo.innerHTML = vidasEnemigo + (' Vidas');
}

function revisarGanador(){
    if (vidasJugador == 0) {
        mensajeDeVoz('PERDISTE');
        crearMensajeGanador('PERDISTE 😭😭😭');
    }
    else if (vidasEnemigo == 0) {
        mensajeDeVoz('GANASTE');
        crearMensajeGanador('🎉🎉🎉 GANASTE 🎉🎉🎉');
    }
}

function CrearMensajesCombate(){
    let eAtaqueJugador = document.createElement('p');
    let eAtaqueEnemigo = document.createElement('p');

    eAtaqueJugador.innerHTML = ataqueJugador;
    eAtaqueEnemigo.innerHTML = ataqueEnemigo;
    
    divAtaqueJugador.appendChild(eAtaqueJugador);
    divAtaqueEnemigo.appendChild(eAtaqueEnemigo);

    divResultado.innerHTML = resultadoBatalla;
}   

function crearMensajeGanador(mensaje){
    let NuevoMensaje = document.createElement('p');
    NuevoMensaje.innerHTML = mensaje;
    seccionMensajes.appendChild(NuevoMensaje);
    deshabilitarBotonesAtaque();
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('boton-reiniciar').style.display = 'block';
} 

function deshabilitarBotonesAtaque(){
    document.getElementById('boton-fuego').disabled = true;
    document.getElementById('boton-agua').disabled = true;
    document.getElementById('boton-tierra').disabled = true;
    document.getElementById('botonesAtaques').style.display = 'none';
}

function reinciarJuego(){
    location.reload();
}

function mensajeDeVoz(texto){
    var synthesis = window.speechSynthesis;

    // Crear mensaje de voz
    var msg = new SpeechSynthesisUtterance();
    msg.text = texto;
  
    // Reproducir mensaje de voz
    synthesis.speak(msg);
}

