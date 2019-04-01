/*let texto = prompt('Texto donde buscar:');
let busqueda = prompt('Palabra/s a buscar:');

let pos = texto.indexOf(busqueda);

while (pos !== -1) {
    console.log('Encontrada en: ', pos);
    pos = texto.indexOf(busqueda, pos + 1);
}
*/
let cadena = 'JavaScript es un lenguaje de programación que nacio en 1995. JavaScript no tiene que ver en nada con Java';

while (cadena !== -1) {
    cadena = cadena.replace('JavaScript', 'JAVASCRIPT');
   
}
alert(cadena);
console.log('terminó el reemplazo');
/*
let cadena = 'Ya se reemplazar palabras';

cadena = cadena.replace('palabras', 'PALABRAS');

console.log(cadena);*/