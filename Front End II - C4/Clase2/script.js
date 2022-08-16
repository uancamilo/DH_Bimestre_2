let persona = {
    nombre: "Camilo",
    apellido: "Serna",
    edad: 37
}

for(let caracteristicas in persona){
    console.log(caracteristicas)
}

for (let atributo in persona) {
    console.log(persona[atributo])
}