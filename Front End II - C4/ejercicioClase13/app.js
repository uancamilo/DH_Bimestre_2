const nombre = document.getElementById("nombre");
const pass = document.getElementById("pass");
const tel = document.getElementById("tel");
const hobbies = document.getElementsByName("hobbies");
const nacionalidad = document.getElementsByName("nacionalidad");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
	//Al escuchar el evento submit, prevenimos el envio por defecto del formulario
	event.preventDefault();

	validarForm(event, getHobbiesSelected(), getPaisSelected());

	console.log(
		normalizar(
			nombre.value,
			pass.value,
			tel.value,
			getHobbiesSelected(),
			getPaisSelected()
		)
	);
});

function normalizar(nombre, pass, tel, hobbie, nacionalidad) {
	const datosPersona = {
		name: nombre,
		password: pass,
		phone: tel,
		hobbies: hobbie,
		nationality: nacionalidad,
	};
	return datosPersona;
}

function validarForm(e, hobbies, nacionalidad) {
	let errores = [];

    let valNombre = nombre.value.split(" ")

    let contador = 0

    for (let i = 0; i < valNombre.length; i++ ) {

        if (valNombre[i].length < 2 ) {

            contador ++;

        }

    }

	let regexNombre = /[A-Za-z]/;
	if (nombre.value == "") {
		errores.push("El nombre no puede estar vacío.");
	} if (nombre.value.split(" ").length < 2 || contador > 0 ) {
        errores.push("El nombre debe contener al menos dos palabras...")
	}
    if (nombre.value.length > 150 ) {

        errores.push("El nombre debe ser menor a 150 caracteres")

    }
    else if (!regexNombre.test(nombre.value)) {
		errores.push("El nombre debe estar en formato de texto.");
	}

	let regexPass =
		/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/;
	if (pass.value == "") {
		errores.push("La contraseña no puede estar vacía.");
	} else if (!regexPass.test(pass.value)) {
		errores.push(
			"La contraseña debe tener entre 8 y 16 caracteres.<br>La contraseña debe tener al menos 1 letra mayúscula.<br>La contraseña debe tener al menos un caracter especial."
		);
	}

	if (hobbies.length < 1) {
		errores.push("Debe seleccionar al menos 1 hobbie.");
	}

	if (hobbies.length > 4) {
		errores.push("Debe seleccionar un máximo de 4 hobbies.");
	}

	if (nacionalidad == undefined) {
		errores.push("Debe seleccionar nacionalidad.");
	}

	if (errores.length > 0) {
		e.preventDefault();
		let ulErrores = document.querySelector("#erroresList");
		for (error of errores) {
			ulErrores.innerHTML +=
				"<br><li class='error'><small>" + error + "<small/><li/>";
		}
	}

    
}

function getPaisSelected() {
	let paisSelected;
	nacionalidad.forEach((pais) => {
		if (pais.checked) {
			paisSelected = pais.id;
		}
	});
	return paisSelected;
}

function getHobbiesSelected() {
	let hobbiesSelected = [];
	hobbies.forEach((hobbie) => {
		if (hobbie.checked) {
			hobbiesSelected.push(hobbie.id);
		}
	});
	return hobbiesSelected;
}
