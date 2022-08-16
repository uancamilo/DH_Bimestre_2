let numeros = [1, 2, 4, 8];

function suma(arr) {
	console.log(`${arr[0]}`);

	for (let i = 1; i < arr.length; i++) {
		console.log(`${arr[i] - 1} + ${arr[i]} = ${arr[i] + arr[i] - 1}`);
	}
}

suma(numeros);
