var prompt = require("prompt-sync")();

let seleccion = parseInt(prompt("1 = PIEDRA -- 2 = PAPEL -- 3 = TIJERA"));

let numRand = parseInt(Math.random() * 3 + 1);

if (isNaN(seleccion)) {
	console.log("el dato ingresado no es válido");
} else {
	if (
		(seleccion == 2 && numRand == 1) ||
		(seleccion == 3 && numRand == 2) ||
		(seleccion == 1 && numRand == 3)
	) {
		console.log(`perdiste, la compu eligió el ${numRand}`);
	} else if (seleccion == numRand) {
		console.log(`empate, la compu eligió ${numRand}`);
	} else {
		console.log(`ganaste, la compu eligió el ${numRand}`);
	}
}