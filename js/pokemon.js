// @ts-nocheck
window.addEventListener('load', iniciarJuego);

let listaAtaquesDisponibles = ['Fuego 🔥', 'Agua 💧', 'Tierra 🪴'];
let pokemonJugador;
let pokemonEnemigo;
let ataqueJugador;
let ataqueEnemigo;
let resultadoBatalla;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let botonIniciar = document.getElementById('botonIniciar');
    botonIniciar.addEventListener('click', ()=>{
        SeleccionarPokemonJugador();
        botonIniciar.style.display = 'none';
    });

    let buttonReiniciar = document.getElementById('bReiniciar');
    buttonReiniciar.addEventListener('click', reinciarJuego);
}

function SeleccionarPokemonJugador(){
    
    // pokemonJugador = document.getElementById('Charmander').checked ? 'Charmander' :
    //                 document.getElementById('Vaporeon').checked ? 'Vaporeon' : 
    //                 document.getElementById('Bulbasour').checked ? 'Bulbasour' : 
    //                 document.getElementById('Volcanion').checked ? 'Volcanion' : 
    //                 document.getElementById('Rattata').checked ? 'Rattata' : 
    //                 document.getElementById('Sydos').checked ? 'Sydos' : '';
    document.getElementById('seleccionar-monstruo').style.display = 'flex';

    let Charmander = document.getElementById('Charmander');
    let Vaporeon = document.getElementById('Vaporeon');
    let Bulbasour = document.getElementById('Bulbasour');
    let Volcanion = document.getElementById('Volcanion');
    let Rattata = document.getElementById('Rattata');
    let Sydos = document.getElementById('Sydos');
    let spanNombrePokemon = document.getElementById('span-nombre-pokemon');

    function asignarPokemonALaVista(){
        spanNombrePokemon.innerHTML = pokemonJugador;
        deshabilitarSelectPokemon();
    }

    Charmander.addEventListener('click', () =>{
        pokemonJugador = "Charmander";
        asignarPokemonALaVista();
    });
    Vaporeon.addEventListener('click', () =>{
        pokemonJugador = "Vaporeon";
        asignarPokemonALaVista(pokemonJugador);
    });
    Bulbasour.addEventListener('click', () =>{
        pokemonJugador = "Bulbasour";
        asignarPokemonALaVista(pokemonJugador);
    });
    Volcanion.addEventListener('click', () =>{
        pokemonJugador = "Volcanion";
        asignarPokemonALaVista(pokemonJugador);
    });
    Rattata.addEventListener('click', () =>{
        pokemonJugador = "Rattata";
        asignarPokemonALaVista(pokemonJugador);
    });            
    Sydos.addEventListener('click', () =>{
        pokemonJugador = "Sydos";
        asignarPokemonALaVista(pokemonJugador);
    });    
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

    let PokemonLista = ['Charmander', 'Vaporeon', 'Bulbasour', 'Volcanion', 'Rattata', 'Sydos'];
    pokemonEnemigo = PokemonLista[numeroRandom];

    let spanPokemonEnemigo = document.getElementById('span-pokemon-enemigo');
    spanPokemonEnemigo.innerHTML = pokemonEnemigo;  
}

function ElegirAtaquePokemon(){
    document.getElementById('seleccionar-ataque').style.display = 'flex';
    mensajeDeVoz('Escoge un ataque');

    let botonFuego = document.getElementById('boton-fuego');
    let botonAgua = document.getElementById('boton-agua');
    let botonTierra = document.getElementById('boton-tierra');

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
    let spanVidasJugador = document.getElementById('vidas-jugador');
    vidasJugador += vida;
    spanVidasJugador.innerHTML = vidasJugador;
}

function controlVidasEnemigo(vida){
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');
    vidasEnemigo += vida;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

function revisarGanador(){
    if (vidasJugador == 0) {
        mensajeDeVoz('PERDISTE');
        crearMensajeGanador('Has perdido 😭😭😭');
    }
    else if (vidasEnemigo == 0) {
        mensajeDeVoz('GANASTE');
        crearMensajeGanador('Has ganado 🎉🎉🎉');
    }
}

function CrearMensajesCombate(){
    let divAtaqueJugador = document.getElementById('ataque-jugador');
    let divAtaqueEnemigo = document.getElementById('ataque-enemigo');

    let eAtaqueJugador = document.createElement('p');
    let eAtaqueEnemigo = document.createElement('p');

    eAtaqueJugador.innerHTML = ataqueJugador;
    eAtaqueEnemigo.innerHTML = ataqueEnemigo;
    
    divAtaqueJugador.appendChild(eAtaqueJugador);
    divAtaqueEnemigo.appendChild(eAtaqueEnemigo);

    let divResultado = document.getElementById('resultado');
    divResultado.innerHTML = resultadoBatalla;
}   

function crearMensajeGanador(mensaje){
    let NuevoMensaje = document.createElement('p');
    NuevoMensaje.innerHTML = mensaje;
    let seccionMensajes = document.getElementById('ganador');
    seccionMensajes.appendChild(NuevoMensaje);
    deshabilitarBotonesAtaque();
    document.getElementById('bReiniciar').style.display = 'block';
} 

function deshabilitarBotonesAtaque(){
    document.getElementById('boton-fuego').disabled = true;
    document.getElementById('boton-agua').disabled = true;
    document.getElementById('boton-tierra').disabled = true;
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