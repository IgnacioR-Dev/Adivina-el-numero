let numeroSecreto = 0; 
let intentos = 1;
let arrayNumerosSorteados = [];
let numeroMaximo = 50

function asignarElementoTexto (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto)
    if (numeroDeUsuario === numeroSecreto){
        asignarElementoTexto('p',`Acertaste el número secreto en el ${intentos} intento`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarElementoTexto('p','El número secreto es menor');
        } else {
            asignarElementoTexto('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function condicionesIniciales(){
    asignarElementoTexto('h1', 'Adivina el número secreto')
    asignarElementoTexto('p', `Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function nuevoJuego() {
    limpiarCampo(); //Primero limpiamos el campo
    condicionesIniciales(); //Indicar el intervalo de números 
    //Generar el número aleatorio
    //Iniciar el número de intentos
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

function limpiarCampo(){
    document.getElementById('valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Si ya sorteamos todos los números
    if (arrayNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto('p','Ya se sortearon todos los números posibles')
    } else {
        //Si el número generado esta incluido en la lista
        if (arrayNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            arrayNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}
