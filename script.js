const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    let resultado = document.getElementById("resultado");

    if(nombre === ""){
        resultado.textContent = "Por favor ingresa tu nombre.";
        return;
    }

    if(!correo.includes("@")){
        resultado.textContent = "Ingresa un correo válido.";
        return;
    }

    if(mensaje.length < 10){
        resultado.textContent = "El comentario debe tener al menos 10 caracteres.";
        return;
    }

    resultado.textContent = "Formulario enviado correctamente.";
});