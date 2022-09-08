/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const formulario = document.querySelector("form");

const inputComentario = document.querySelector("#comentario");

const cajaComentarios = document.querySelector(".comentarios");

const eliminarComentario = document.getElementById("eliminar");

let listadoComentarios = [];

/* -------------------------------------------------------------------------- */
/*      momento incial donde recopilamos info alamacenada en localStorage     */
/* -------------------------------------------------------------------------- */
const comentariosAlmacenados = JSON.parse(
	localStorage.getItem("comentariosLocalSotarge")
);

if (comentariosAlmacenados != null) {
	listadoComentarios = comentariosAlmacenados;
}

renderizarComentarios(listadoComentarios);
/* ------------------------------------ . ----------------------------------- */

formulario.addEventListener("submit", function (evento) {
	evento.preventDefault();

	if (validarComentario(inputComentario.value)) {
		guardarNuevoComentario(inputComentario.value);

		console.log(listadoComentarios);

		renderizarComentarios(listadoComentarios);
	}

	formulario.reset();
});

function guardarNuevoComentario(comentario) {
	listadoComentarios.push(comentario);
	localStorage.setItem(
		"comentariosLocalSotarge",
		JSON.stringify(listadoComentarios)
	);
}

function renderizarComentarios(listado) {
	//siempre limpio la caja, antes de agregar nuevo contenido
	cajaComentarios.innerHTML = "";
	//renderizo cada comentario del listado
	listado.forEach((elemento) => {
		cajaComentarios.innerHTML += `<p>${elemento}</p>`;
	});
}

function validarComentario(comentario) {
	let resultado = true;

	if (comentario.length < 3) {
		resultado = false;
		presentarError();
	}

	return resultado;
}

function presentarError() {
	const error = document.querySelector("#error");

	error.classList.remove("oculto");

	setTimeout(function () {
		error.classList.add("oculto");
	}, 1500);

}

eliminarComentario.addEventListener("click", () => {
  localStorage.clear();

  cajaComentarios.innerHTML = ""
  
  listadoComentarios = []

} )
