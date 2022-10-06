const gente = [
  {
    "Nombre": "Francisco",
    "Apellido": "Guerrero",
    "Rol": "Alumno",
    "Ciudad": "Buenos Aires",
  },
  {
    "Nombre": "Alan",
    "Apellido": "Hoffer",
    "Rol": "Alumno",
    "Ciudad": "Madariaga"
  },
  {
    "Nombre": "Facundo",
    "Apellido": "Mamonde",
    "Rol": "Alumno",
    "Ciudad": "Madariaga",
  },
  {
    "Nombre": "Geor",
    "Apellido": "Fernandez",
    "Rol": "Profe",
    "Ciudad": "Tandil"
  },
  {
    "Nombre": "Nahuel",
    "Apellido": "Falconaro",
    "Rol": "Profe",
    "Ciudad": "Tandil"
  }
];


let tabla = document.getElementById("tabla")
let titulos = Object.keys(gente[0])
let filaTitulos= `<thead><tr>`
for(e in titulos){
    filaTitulos+=`<th>${titulos[e]}</th>`
}
filaTitulos+=`</tr></thead>`
tabla.innerHTML=filaTitulos
for(let i = 0; i < gente.length; i++){
    let fila = `<tr><td>${gente[i].Nombre}</td><td>${gente[i].Apellido}</td><td>${gente[i].Rol}</td><td>${gente[i].Ciudad}</td></tr>`
    tabla.innerHTML+=fila
}
