// @ts-nocheck
// ({ plugins: ['jsdom-quokka-plugin'] });
window.addEventListener('load', iniciarJuego);

let ListaDePokemons = ['Charmander', 'Vaporeon', 'Bulbasour', 'Volcanion', 'Rattata', 'Sydos'];
let listaAtaquesDisponibles = ['Fuego 🔥', 'Agua 💧', 'Tierra 🪴'];

let plantillaPokemon;
let pokemonJugador;
let pokemonEnemigo;
let ataqueJugador;

let ataqueEnemigo;
let resultadoBatalla;
let vidasJugador = 3;
let vidasEnemigo = 3;

const pokemons = document.getElementById('pokemons');

const botonIniciar = document.getElementById('botonIniciar');
const botonReiniciar = document.getElementById('boton-reiniciar');

const botonSeleccionarPokemon = document.getElementById('boton-seleccionar-pokemon');
const imgPokemonJugador = document.getElementById('imagen-pokemon-jugador');

const spanPokemonEnemigo = document.getElementById('nombre-pokemon-enemigo');
const imgPokemonEnemigo = document.getElementById('imagen-pokemon-enemigo');

const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const divAtaqueJugador = document.getElementById('ataque-jugador');
const divAtaqueEnemigo = document.getElementById('ataque-enemigo');
const divResultado = document.getElementById('resultado');

const seccionMensajes = document.getElementById('ganador');

let arrPokemones = [];

class clsPokemon {
    constructor(nombre, imgen,tipo, vida, ataques){    
        this.nombre = nombre;
        this.imagen = imgen;
        this.tipo = tipo;
        this.vida = vida;       
        this.ataques = [];
    }
}

let objVaporeon = new clsPokemon('Vaporeon', 'img/Vaporeon.png', 'agua', 3);
let objBulbasour = new clsPokemon('Bulbasour', 'img/Bulbasour.png', 'tierra', 3);
let objVolcanion = new clsPokemon('Volcanion', 'img/Volcanion.png', 'fuego', 3);
let objRattata = new clsPokemon('Rattata', 'img/Rattata.png', 'tierra', 3);
let objSydos = new clsPokemon('Sydos', 'img/Sydos.png', 'agua', 3);
let objCharmander = new clsPokemon('Charmander', 'img/Charmander.png', 'Fuego', 3);    

objVaporeon.ataques.push(   {nombre: '💧', id: 'boton-agua'},
                            {nombre: '💧', id: 'boton-agua'}, 
                            {nombre: '💧', id: 'boton-agua'}, 
                            {nombre: '🪴', id: 'boton-tierra'}, 
                            {nombre: '🔥', id: 'boton-fuego'});

objBulbasour.ataques.push(  {nombre: '🪴', id: 'boton-tierra'},
                            {nombre: '🪴', id: 'boton-tierra'}, 
                            {nombre: '🪴', id: 'boton-tierra'},
                            {nombre: '💧', id: 'boton-agua'}, 
                            {nombre: '🔥', id: 'boton-fuego'});

objVolcanion.ataques.push(  {nombre: '🔥', id: 'boton-fuego'},
                            {nombre: '🔥', id: 'boton-fuego'}, 
                            {nombre: '🔥', id: 'boton-fuego'}, 
                            {nombre: '🪴', id: 'boton-tierra'},
                            {nombre: '💧', id: 'boton-agua'});

objRattata.ataques.push({nombre: '🪴', id: 'boton-tierra'},
                        {nombre: '🪴', id: 'boton-tierra'},
                        {nombre: '🪴', id: 'boton-tierra'},
                        {nombre: '💧', id: 'boton-agua'},
                        {nombre: '🔥', id: 'boton-fuego'});

objSydos.ataques.push(  {nombre: '💧', id: 'boton-agua'},
                        {nombre: '💧', id: 'boton-agua'},
                        {nombre: '💧', id: 'boton-agua'},
                        {nombre: '🔥', id: 'boton-fuego'}   ,
                        {nombre: '🪴', id: 'boton-tierra'}  );

objCharmander.ataques.push( {nombre: '🔥', id: 'boton-fuego'},
                            {nombre: '🔥', id: 'boton-fuego'},
                            {nombre: '🔥', id: 'boton-fuego'},
                            {nombre: '💧', id: 'boton-agua'},
                            {nombre: '🪴', id: 'boton-tierra'});

arrPokemones.push(objVaporeon, objBulbasour, objVolcanion, objRattata, objSydos, objCharmander);

console.log(arrPokemones);


function iniciarJuego(){
    botonIniciar.addEventListener('click', ()=>{
        botonIniciar.style.display = 'none';
        ajustarBody();
        insertarPokemonesAlDom();
        SeleccionarPokemonJugador();
    });

    botonReiniciar.addEventListener('click', reinciarJuego);
}

function ajustarBody(){
    document.querySelector('body').style.height = 'auto';
   
}

function insertarPokemonesAlDom(){
    arrPokemones.forEach(pokemon => {
        plantillaPokemon =  `
            <input type="radio" name="pokemon" id="${pokemon.nombre}">
            <label class="tarjetaPokemon" for="${pokemon.nombre}" id="lb${pokemon.nombre}">
                <img src="${pokemon.imagen}" alt="nocargo xd">
                <p>${pokemon.nombre}</p>                    
            </label>
        `;
        pokemons.innerHTML += plantillaPokemon;
    });
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

    botonSeleccionarPokemon.addEventListener('click', () => {
        buscarPokemonSeleccionado();
        spanNombrePokemon = document.getElementById('nombre-pokemon-jugador').innerHTML = pokemonJugador;
        imgPokemonJugador.src = `img/${pokemonJugador}.png`;
        deshabilitarSelectPokemon();});
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