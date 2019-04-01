const cadena = window.prompt('Escribe una palabra o frase para saber si es un palíndromo');

function palin(text){
 if (!text){
     return false;
    }

    let sinEspacios = text.replace(/ /g, '');
    sinEspacio = sinEspacios.toLowerCase();

    for (let i = 0; i < sinEspacios.length /2; i++ ){
        if (sinEspacios[i] !== sinEspacios[sinEspacios.length - (i + 1)]){
            return false;
        }
    }
    return true;
}

if (!cadena){
    console.log('Escribe un texto válido');
}

if (palin(cadena)){
    console.log(`El texto '${cadena}' es un palíndromo`);
}else{
    console.log(`El texto '${cadena}' no es un palíndromo`);
}    

