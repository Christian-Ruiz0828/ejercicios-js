/*var edad = prompt('¿Cual es tu edad?');

if( edad >= 18){
 //console.log ('Eres mayor de edad')
 document.write ('Eres mayor de edad')
} else{
   // console.log('Eres menor de edad');
   document.write('Eres menor de edad.')
}
/*


/* Preguntarle al usuario su edad por promt. Despues hacer una condicional if 
con las siguientes situaciones, si el usuario es mayor de 18 y menor de 29 años
mostrar mensaje: Felicidades has sido aceptado en el bootcamp de generation, 
en caso contrariomostrar mensaje: No cumples con los requisitos del programa. */

var edad = prompt('¿cual es tu edad?');


if(edad >= 18 && edad<30){
    //console.log ('Felicidades has sido aceptado en el bootcamp de generation')
    document.write('Felicidades has sido aceptado en el bootcamp de generation')
} else{
    //console.log ('Lo sentimos, no cumples con los requisitos para ingresar.')
    document.write('Lo sentimos, no cumples con los requisitos para ingresar.')
}