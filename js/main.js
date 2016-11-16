//Decisión del jugador
var respuesta;
var jugador = prompt ("¿Piedra, papel o tijeras?");
jugador = jugador.toLowerCase();
console.log(jugador);

//Número random 1-3
var computadora = Math.ceil((Math.random()*3));
