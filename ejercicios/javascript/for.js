/*const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

for (let i = 0; i < meses.length; i++){
    console.log(meses[i]);
};*/

let numero = parseInt(prompt('Dame un número entre 1 y 10'));

while (numero < 1 || numero > 10){
    numero = parseInt(prompt('Dame un número entre 1 y 10'));   
}
alert('el numero es: ', numero);