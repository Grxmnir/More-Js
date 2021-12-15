const sendBtn = document.getElementById("send-btn");


sendBtn.addEventListener("click", () => {
    let resultado, mensaje;
    try {
        prevRes = parseInt(document.getElementById("nota").value);

        if (isNaN(prevRes)) {
            throw "Gracioso";
        }

        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(7, 3, prevRes);

    } catch(e) {
        resultado = "Hermano deja de hacer tonterias";
        mensaje = "Sé lo que estas intentando, para ya";
    }
    abrirModal(resultado,mensaje);

})



const definirMensaje = (pr) => {
    let resultado;
    switch (pr) {
        case 1:
            resultado = "Que mierda eh";
            break;
        case 2:
            resultado = "Apestas";
            break;
        case 3:
            resultado = "Pero que muy mal";
            break;
        case 4:
            resultado = "Muy mal";
            break;
        case 5:
            resultado = "Mal";
            break;
        case 6:
            resultado = "Regular";
            break;
        case 7:
            resultado = "Bien pero puede mejorar";
            break;
        case 8:
            resultado = "Bien";
            break;
        case 9:
            resultado = "Muy bien";
            break;
        case 10:
            resultado = "Excelente";
            break;
        default:
            resultado = null;

    }

}


const verificarAprobacion = (prevRes) => {
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7) {
        return "aprobado";
    }
    return "Desaprobado";


}


const abrirModal = (res, msg) => {
    console.log(res);
    console.log(msg);
}