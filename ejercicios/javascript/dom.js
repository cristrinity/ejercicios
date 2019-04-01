const varDivs = document.querySelectorAll('div');
console.log ('Número de divs en el texto: '+ varDivs.length);

const varClass = document.querySelectorAll('.animated');
console.log ('Número de clases "animated" en el texto: '+ varClass.length);

const varId = document.getElementById('home');
console.log ('Enlace de ID "home": '+ varId.href);

const varPar = document.querySelectorAll('section');
let pIn = varPar[1].querySelectorAll('p');
console.log('El número de párrafos que hay en el segundo <section> son: ' + pIn.length);

