//Decisión del jugador
var respuesta;
var jugador = prompt ("¿Piedra, papel o tijeras?");
jugador = jugador.toLowerCase();
console.log(jugador);

//Número random 1-3
var computadora = Math.ceil((Math.random()*3));

//Juego de la computadora
console.log(computadora);
	if (computadora == 1){
		computadora = "piedra";
	}else if (computadora == 2){
		computadora = "papel";
	}else if (computadora == 3){
		computadora = "tijeras";
	}
console.log(computadora);
comparar(jugador, computadora);
alert("Computadora escogió: "+ computadora + ".\n" +
	"El jugador escogió: " + jugador + ".\n" +
	"Por lo tanto: " + resultado);
console.log("Computadora escogió: "+ computadora + ".\n" +
	"El jugador escogió: " + jugador + ".\n" +
	"Por lo tanto: " + resultado);
