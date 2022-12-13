
const boton = document.getElementById("boton11");

boton.addEventListener("click", () => {
    console.log("click en boton")

    alert("click en boton")
})

$("#boton12").click(() => {
   console.log("Hola, estoy utilizando jQuery")
 })