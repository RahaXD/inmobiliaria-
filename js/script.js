//seleccionar elementos con querySelector
//retorna de 0 a 1 elemento
const titulo=document.querySelector(".title");
console.log(titulo)
//seleccionar elementos con queryselectorAll
//retorna los valores en un array de 0 a 1 elemento
const enlace=document.querySelectorAll('#menu a')
console.log(enlace)
//getElementById
const seccion=document.getElementById("seccion")
console.log(seccion)
//Generar codigo HTML desde Js
const nuevoenlace=document.createElement('a');
//<a href="ayuda.html">texto</a>
//agregar el href
nuevoenlace.href="ayuda.html"
//agregar el texto
nuevoenlace.textContent="Ayuda"
//agregar una clase
nuevoenlace.classList.add('enlace')
//agregar al documento
const navegacion=document.querySelector('#menu')
navegacion.appendChild(nuevoenlace)
//appendChild, agrega a un nodo al final de la lista 
// de un elemento hijo de un elemento padre especificado.
//EVENTOS
window.addEventListener('load',console.log(1))
window.onload=function()
{
    console.log(3)
}
window.addEventListener('load',imprimir)
function imprimir()
{
    console.log(2)
}
//SELECCIONAR ELEMENTOS Y ASIGNAR UN EVENTO
const btnenviar=document.querySelector('#enviar')
btnenviar.addEventListener('click',function(evento){
    console.log(evento);
    evento.preventDefault();
    //Se previene esa accion de flash por default, es decir, 
    //ya no se va a recargar, este metodo se utiliza
    //en formularios
    console.log("Enviando Formulario")

})