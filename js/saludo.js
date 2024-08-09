const saludoTxt = document.getElementById('saludo');
const nameInputContainer = document.getElementById('name-input-container');
const nameInput = document.getElementById('name-input');
const submitButton = document.getElementById('submit-name');

function guardarNombre(){
    const name = nameInput.value.trim();
    if(name.length > 1){
        localStorage.setItem('nombreUsuario', name);
        mostrarNombre(name);
    }
}

function mostrarNombre(name){
    const hora = new Date().getHours();
    let mensaje = "Buenas noches";
    if(hora < 12) mensaje = "Buenos días";
    if(hora < 18 && hora > 12) mensaje = "Buenas tardes";

    saludoTxt.textContent = `¡${mensaje}, ${name}`;
    nameInputContainer.style.display = 'none';
}

submitButton.addEventListener('click', guardarNombre);
nameInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        guardarNombre();
    }
});

//comprobar si ya hay un nombre guardado
//si hay un nombre guardado lo muestro
const nombreGuardado = localStorage.getItem('nombreUsuario');
if(nombreGuardado){
    mostrarNombre(nombreGuardado);
}

const fecha = new Date();