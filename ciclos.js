/* Ciclo For en javascript
Sirve para ejecutar n canitdad de veces un codigo
*/


/*console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');
console.log('Hola');*/

for(var contador = 0; contador < 5; contador++) {
    console.log('Hola desde el ciclo for. Vuelta'+ contador);
}

const frutas = ['manzana', 'mango', 'pera', 'piña', 'Sandia', 'melon'];

/*console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]); */

for(var i= 0; i < frutas.length; i++){
    console.log(frutas[i]);
    document.write(frutas[i]);
}

