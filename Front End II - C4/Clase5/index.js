function writeHTML(title, text) {
	const body = document.getElementById("body");
	const template = `<h1>Hola a todos! Este es el títutlo: ${title} </h1> <p> WOW!!! ${text}</p>`;

	body.innerHTML += template;
}

writeHTML("Estamos insentando elementos html desde js", "cuanto dinamismo .");

const poner = document.getElementById("poner");
const quitar = document.getElementById("quitar");
const text = document.getElementById("text");

poner.addEventListener("click", function () {
	text.classList.add("bold");
});

quitar.addEventListener("click", function () {
  text.classList.remove("bold");
});
