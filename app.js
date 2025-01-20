//Creamos el array para almacenar los nombres

let nombresAmigos = [];

function limpiarCampo(elemento) {
    document.querySelector(elemento).value = '';
    return;
}

function agregarAmigo() {
    let campoTexto = document.querySelector('#amigo').value;
    if (campoTexto == '') {
        alert('Por favor, inserte un nombre para poder continuar');
    }
    else {
        if (!nombresAmigos.includes(campoTexto)) {
            nombresAmigos.push(campoTexto);
        }
        else {
            alert('Ese nombre ya fue agregado, ingresa otro');
        }
    }
    console.log(nombresAmigos);
    limpiarCampo('#amigo');
    return;
}

