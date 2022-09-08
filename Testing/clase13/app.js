

function sumar(num1, num2) {
	if (isNaN(num1) || isNaN(num2) || num1 == null || num2 == null) {
		return false;
	} else {
		return num1 + num2;
	}
}

function restar(num1, num2) {
	if (isNaN(num1) || isNaN(num2) || num1 == null || num2 == null) {
		return false;
	} else {
		return num1 - num2;
	}
}

function multiplicar(num1, num2) {
	if (isNaN(num1) || isNaN(num2) || num1 == null || num2 == null) {
		return false;
	} else {
		return num1 * num2;
	}
}

function dividir(num1, num2) {
	if (
		isNaN(num1) ||
		isNaN(num2) ||
		num2 === 0 ||
		num1 == null ||
		num2 == null
	) {
		return false;
	} else {
		return num1 / num2;
	}
}

function main(a, b, tipoOper) {
	let result = 0;
	switch (tipoOper) {
		case "suma":
			result = sumar(a, b);
			return result;
		case "resta":
			result = restar(a, b);
			return result;
		case "multiplicacion":
			result = multiplicar(a, b);
			return result;
		case "division":
			result = dividir(a, b);
			return result;
		default:
			console.log("Error");
			break;
	}
}

console.log(main(2, 3, "suma"));
console.log(main(2, 3, "resta"));
console.log(main(2, 3, "multiplicacion"));
console.log(main(2, 3, "division"));
console.log(main(2, null, "division"));
console.log(main("b", "a", "suma"));
main(2, 3, "flako");
