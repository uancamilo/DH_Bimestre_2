let seleccion = parseInt(prompt("1 = PIEDRA -- 2 = PAPEL -- 3 = TIJERA"));

let numRand = parseInt(Math.random() * 3 + 1);

if(isNaN(seleccion)) {
    console.log("la seleccion no es valida")
} else {
    if (seleccion == numRand) {
			console.log("EMPATE. la computadora eligio: " + numRand);
		}

		if (seleccion == 2 && numRand == 1) {
			console.log("PERDISTE. la computadora eligio: " + numRand);
		}
		if (seleccion == 3 && numRand == 1) {
			console.log("GANASTE. la computadora eligio: " + numRand);
		}

		if (seleccion == 1 && numRand == 2) {
			console.log("GANASTE. la computadora eligio: " + numRand);
		}
		if (seleccion == 3 && numRand == 2) {
			console.log("PERDISTE. la computadora eligio: " + numRand);
		}

		if (seleccion == 1 && numRand == 3) {
			console.log("PERDISTE. la computadora eligio: " + numRand);
		}
		if (seleccion == 2 && numRand == 3) {
			console.log("GANASTE. la computadora eligio: " + numRand);
		}
}