//Creamos el array para almacenar los nombres

let nombresAmigos = [];
let lista = document.getElementById('listaAmigos');


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
    agregarLista();
    return;
}

function agregarLista() {
    lista.innerHTML = "";
    for (let amigo of nombresAmigos){
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo;
        lista.appendChild(nuevoAmigo);
    }
    return;
}

function sortearAmigo(){
    if (nombresAmigos.length < 2){
        alert('Antes de sortear, debes ingresar al menos dos nombres');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
        let nombreAleatorio = nombresAmigos[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = nombreAleatorio;
        nombresAmigos = [];
        lista.innerHTML = '';
    }
    return;
}
