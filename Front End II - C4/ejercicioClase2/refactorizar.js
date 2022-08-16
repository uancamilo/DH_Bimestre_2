var prompt = require("prompt-sync")();

let seleccion = prompt("Piedra, Papel ó Tijera: ").toLowerCase();

let eleccion = seleccion[0].toUpperCase() + seleccion.substring(1);

console.log(" Has seleccionado: " + eleccion);



function ppot (eleccion) {
if (eleccion === "Piedra") {
	let piedra = 1;
	console.log(eleccion );
} else if (eleccion === "Papel") {
	let paple = 2;
} else if (eleccion === "Tijera") {
	let tijera = 3;
}
}



let numRand = parseInt(Math.random() * 3 + 1);
