let button = document.querySelector(".confirmar");


alumnos = [{
    nombre: "Rafael Munhoz",
    email: "rafael@hotmail.es",
    materia: "matematica"

},
{
    nombre: "Carlos",
    email: "carlos@hotmail.es",
    materia: "biologia"}
   , {
        nombre: "Pedro",
        email: "pedro@hotmail.es",
        materia: "historia"
    
    },
    {
        nombre: "Henrique",
        email: "Henrique@hotmail.es",
        materia: "calculo"
    
    }
];

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-element nombre">${nombre}</div>
    <div class="grid-element email">${email}</div>
    <div class="grid-element materia">${materia}</div>
    <div class="grid-element semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>
`;

document.querySelector(".grid-container").innerHTML += htmlCode;
}

button.addEventListener("click", ()=>{
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value
       
    }
    
})
