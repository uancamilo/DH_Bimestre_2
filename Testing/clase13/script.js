const url = "https://pokeapi.co/api/v2/ability/";

function pokeApi() {
	fetch(url).then((res) => console.log(res));
}

pokeApi();

