/*const num = parseFloat(prompt('Introduce un número:'));

function NumBoolean(numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
NumBoolean(num);
*/

radio = parseFloat(prompt('Introduce el radio del círculo'));

let varArea = null;
function area(num){
    varArea = Math.PI * Math.pow(num, 2);
    return varArea;
}
area(radio);
console.log('el área del círculo es :', varArea);

let varPeri = null;
function perimetro(radio){
    varPeri = 2 * Math.PI * radio;
    return varPeri;
}
perimetro(radio);
console.log('el perímetro del círculo es :', varPeri);

