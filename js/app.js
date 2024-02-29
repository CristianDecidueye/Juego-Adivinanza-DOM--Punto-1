
// ACA EL JUEGO SELECCIONA EL NUMERO AL AZAR
let numeroAzar = Math.floor(Math.random()*100) + 1
let N

let numeroEntrada = document.getElementById('numeroEntrada')

const mensaje = document.getElementById('mensaje')
const intento = document.getElementById('intento')
let intentos = 0


// ESTA FUNCION SE VA A EJECUTAR CUANDO SE TOQUE EL BOTON CHEQUEAR
function chequearResultado(){
    intentos ++
    intento.textContent = intentos 
let numeroIngresado = parseInt(numeroEntrada.value)

if(numeroIngresado <1 || isNaN (numeroIngresado)){
    mensaje.textContent = 'Por favor, introduce un numero valido'
return
}
if(numeroIngresado === numeroAzar){
    mensaje.textContent = '¡FELICITACIONES HAZ ADIVINADO EL NUMERO';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
}
else if(numeroIngresado < numeroAzar){
    mensaje.textContent = '¡Haz alto! El numero es mayor al que elegiste';
    mensaje.style.color = 'red';
}else{
    mensaje.textContent = '¡Haz mas bajo! El numero es menor al que elegiste';
    mensaje.style.color = 'orange';
}
}