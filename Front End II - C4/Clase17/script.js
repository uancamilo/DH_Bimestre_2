const apiUrl = "https://dog.ceo/api/breeds/image/random";

const btn = document.getElementById("random");

const imgDog = document.getElementById("perrito");

function peticion(url) {
	fetch(url)
		.then((resp) => {
			console.log(resp);
			return resp.json();
		})
		.then((datos) => {
			console.log(datos);
			imgDog.setAttribute("src", datos.message);
		})
		.catch((err) => {
			console.log(err);
		});
}

btn.addEventListener("click", function () {
	peticion(apiUrl);
});
