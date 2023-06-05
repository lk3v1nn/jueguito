//LISTA DE OPCIONES
const opciones = {
    1: "Piedra",
    2: "Papel",
    3: "Tijera"
}
//VARIABLES
let PC = null;
let jugador = null;
let ganado = 0;
let perdido = 0;
let jugadas = parseInt(prompt("¿Cuantas veces debe ganar el campeon?: "))

while(ganado < jugadas && perdido < jugadas){
    //ELECCION JUGADOR
    jugador = parseInt(prompt ("Elije: \n1 piedra\n2 papel\n3 tijera"));
    alert(opciones[jugador])
    //ELECCION PC
    PC = parseInt(Math.random(3)*3) +1
    alert(opciones[PC])
    combate();
}
document.write("WIN: " + ganado + " LOSE: " + perdido);

function combate(){
    if (PC == jugador){
        alert("Empate");
    } else if ((PC == 1 && jugador == 2) || (PC == 2 && jugador== 3) ||(PC == 3 && jugador == 1)){
        alert("Ganaste");
        ganado+=1;
    } else {
        alert("Perdiste");
        perdido+=1;
    }
}