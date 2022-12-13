
const boton = document.getElementById("boton11");

boton.addEventListener("click", () => alert("click en el botón"))

$("#boton12").click(() => {
   console.log("Hola, estoy utilizando jQuery")
 })