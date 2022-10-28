const formulario = document.querySelector('#form');
const btnEnviar = document.querySelector('#btn-enviar');
const errorCamposVacios = document.querySelector('#errorCamposVacios');
const camposCorrectos = document.querySelector('#camposCorrectos')
const spanNombre = document.querySelector('#span-error-nombre');
const spanEmail = document.querySelector('#span-error-email');
const spanTelefono = document.querySelector('#span-error-telefono');
const spanAsunto = document.querySelector('#span-error-asunto');
const spanMensaje = document.querySelector('#span-error-textarea');

const mensajesErrores = {
    errorNombre: "Ingrese al menos 3 letras, sin números, sin caracteres especiales",
    errorEmail: "Formato de E-mail inválido",
    errorTelefono: "Formato de teléfono inválido",
    errorAsunto: "Este campo no puede estar vacio. Minimo 4 letras",
    errorMensaje: "Debe completar este campo. Minimo 10 letras"
}

const patrones = {
    patternNombre: /[a-zA-Z]{3,50}/,
    pattternEmail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    patternTelefono: /^[0-9]{10,12}$/,
    patternAsunto: /[a-zA-Z]{4,50}/,
    patternMensaje: /^[a-zA-Z0-9_ ]{10,300}/  
    ///[a-zA-Z0-9]{10,300}/
  
}

const valorCampo = {
    nombre: false,
    email: false,
    telefono: false,
    asunto: false,
    mensaje: false
}

function validarForm() {

    if (formulario.nombre.value === "" || formulario.email.value === "" || formulario.telefono.value === "" || formulario.asunto.value === "" || formulario.textarea.value === "") {
        errorCamposVacios.style.display = "block"

    }

    if (!patrones.patternNombre.test(formulario.nombre.value)) {

        spanNombre.innerHTML = mensajesErrores.errorNombre;
        return focus();

    } else {
        spanNombre.innerHTML = "";
        valorCampo.nombre = true;
    }

    if (!patrones.pattternEmail.test(formulario.email.value)) {
        spanEmail.innerHTML = mensajesErrores.errorEmail;
        return focus();
    } else {
        spanEmail.innerHTML = "";
        valorCampo.email = true;
    }

    if (!patrones.patternTelefono.test(formulario.telefono.value)) {
        spanTelefono.innerHTML = mensajesErrores.errorTelefono;
        return focus();
    } else {
        spanTelefono.innerHTML = "";
        valorCampo.telefono = true;
    }

    if (!patrones.patternAsunto.test(formulario.asunto.value)) {
        spanAsunto.innerHTML = mensajesErrores.errorAsunto;
        return focus();
    } else {
        spanAsunto.innerHTML = "";
        valorCampo.asunto = true;
    }

    if (!patrones.patternMensaje.test(formulario.textarea.value)) {
        spanMensaje.innerHTML = mensajesErrores.errorMensaje;
        return focus();
    } else {
        spanMensaje.innerHTML = "";
        valorCampo.mensaje = true;
    }

    return true;
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valorCampo.nombre && valorCampo.email && valorCampo.telefono && valorCampo.asunto && valorCampo.mensaje) {
        errorCamposVacios.style.display = "none"
        camposCorrectos.style.display = "block"
        formulario.submit();
        formulario.reset(); 
    }
});

btnEnviar.addEventListener("click", ()=>{
    validarForm();
});


