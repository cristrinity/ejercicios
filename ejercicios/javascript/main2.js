//const num1 = parseInt(prompt('Numero 1:'));
//const num2 = parseInt(prompt('Numero 2:'));

// Escribe un programa que pida dos numeros al usuario, los reste y si 
//la resultado es menor que 0 saque un mensaje diciendolo.
/*result = num1 - num2;
if (result < 0) {
    alert('El resultado es menor que 0!');
}
let hora = parseInt(prompt('Dame la hora'));
let minuto = parseInt(prompt('Dame el minuto'));
++minuto;
console.log('Son las: ', hora ':' minuto);*/

const mes = prompt('Dame el nombre del mes');

switch (mes){
    case 'enero':
    alert(31);
    break;
    case 'febrero':
    alert(28);
    break;
    case 'marzo':
    alert(31);
    break;
    default: alert('no existe el mes');
}