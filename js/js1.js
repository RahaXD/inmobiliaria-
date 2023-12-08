//querySelector
const titulo=document.querySelector(".title") //retorna 0 a 1 elemento
console.log(titulo)
//querySlectorAll
const enlace=document.querySelectorAll("#menu a") //retorna 0 a 1 elemento
console.log(enlace)
//enlace[0].textContent="nuevo Texto"
//getElementById
const seccion=document.getElementById("seccion") //retorna 0 a 1 elemento
console.log(seccion)
// Generar codigo HTML desde JS
const nuevoenlace=document.createElement('a');
//Agregar el href
nuevoenlace.href="Ayuda.html";
//Agregar el texto
nuevoenlace.textContent="Ayuda";
//agregar clase
nuevoenlace.classList.add('enlace');
//agregar al documento
const navegacion=document.querySelector('#menu');
navegacion.appendChild(nuevoenlace);
//appendChild, Agrega un nuevo nodo al final de la lista de un 
//elemento hijo de un elemento padre especificado.
//EVENTOS
window.addEventListener('load',
 console.log(1));
window.onload=function()
{
    console.log(3);
}
window.addEventListener('load',imprimir)
//{
    //load espera que JS y lo archivos de dependen del HTML esten listos
//    console.log(2);
//})
console.log(5);
document.addEventListener('DOMContentLoaded',
function(){
    //solo espera por el HTML, pero no espera a CSS o imagenes
    console.log(4);
})
function imprimir()
{
    console.log(2)
}
window.onscroll=function()
{
    console.log('scroling.....')
}
//SELECCIONAR ELEMENTOS Y ASICUAR UN EVENTO
const btnenviar=document.querySelector('#enviar');
//btnenviar.addEventListener('click',function(){
  //  console.log('Enviando Formulario')
//})
btnenviar.addEventListener('click',function(evento){
    
    console.log(evento);
    //prevenimos esa accion flash por default, es decir, 
    //ya no se va reacaragar, este metodose utiliza especialmente
    //para formularios
    evento.preventDefault();
    console.log('Enviando Formulario')
})





