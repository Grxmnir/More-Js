const input = document.querySelector(".input");
const seleccionado = document.querySelector(".seleccionado")


input.addEventListener("keyup",(e)=>{
let tecla = e.key;
let nuevoContenido = `La ultima tecla apretada fue: <b> ${tecla}</b>`
seleccionado.innerHTML = nuevoContenido;
}
)
