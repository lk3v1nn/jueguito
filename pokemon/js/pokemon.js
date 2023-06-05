// @ts-nocheck
window.addEventListener('load', iniciarJuego);

let listaAtaquesDisponibles = ['Fuego 🔥', 'Agua 💧', 'Tierra 🪴'];
let pokemonJugador;
let pokemonEnemigo;
let ataqueJugador;
let ataqueEnemigo;
let resultadoBatalla;

function iniciarJuego(){
    let pokemonSeleccionado = document.getElementById('seleccionar-monstruo');
    let botonSeleccionarPokemon = pokemonSeleccionado.querySelector('button');
    botonSeleccionarPokemon.addEventListener('click', SeleccionarPokemonJugador);
}

function SeleccionarPokemonJugador(){
    
    pokemonJugador = document.getElementById('Charmander').checked ? 'Charmander' :
                    document.getElementById('Vaporeon').checked ? 'Vaporeon' : 
                    document.getElementById('Bulbasour').checked ? 'Bulbasour' : 
                    document.getElementById('Volcanion').checked ? 'Volcanion' : 
                    document.getElementById('Rattata').checked ? 'Rattata' : 
                    document.getElementById('Sydos').checked ? 'Sydos' : 'Seleccione un pokemon';
    
    let spanNombrePokemon = document.getElementById('span-nombre-pokemon');
    spanNombrePokemon.innerHTML = pokemonJugador;

    SeleccionarPokemonEnemigo();
    ElegirAtaquePokemon();
}

function SeleccionarPokemonEnemigo(){

    let numeroRandom = parseInt(Math.random()*6);

    let PokemonLista = ['Charmander', 'Vaporeon', 'Bulbasour', 'Volcanion', 'Rattata', 'Sydos'];
    pokemonEnemigo = PokemonLista[numeroRandom];

    let spanPokemonEnemigo = document.getElementById('span-pokemon-enemigo');
    spanPokemonEnemigo.innerHTML = pokemonEnemigo;  
}

function ElegirAtaquePokemon(){
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
    return ataqueEnemigo;
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
    }
    else {
        resultadoBatalla = 'GANO EL ENEMIGO';
    }
    CrearMensajes();
}

function CrearMensajes(){
    let NuevoMensaje = document.createElement('p');
    NuevoMensaje.innerHTML = 'Tu '+ pokemonJugador + ' ataco con ' + ataqueJugador + ', el ' + pokemonEnemigo + ' del enemigo ataco con ' + ataqueEnemigo + ' -> ' + resultadoBatalla;
    let seccionMensajes = document.getElementById('mensajes');
    seccionMensajes.appendChild(NuevoMensaje);
}   

