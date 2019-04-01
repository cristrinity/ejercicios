const conceptos = [];

function Descripciones() {
    let descripcion;
    while (!descripcion) {
        descripcion = window.prompt('Introduce una descripción:');
    }
    return descripcion;
}

function BaseImponible() {
    let base;
    const regex = /^\d+(\.\d+)?$/ ;
    while (!base) {
        base = window.prompt('Introduce la base imponible:');
        // es un número
        if (!regex.test(base)) {
        // error en número
            base = null;
            continue;
        } 
        base = parseFloat(base);
    }
    return base;
}

function OtroCampo() {
    return window.confirm('¿Quieres introducir más conceptos?');
}

function ImpresionFactura() {
    let totalBase = 0;

    console.log('FACTURA:');
    console.log(`Conceptos: *******`)
    for (let i = 0; i < conceptos.length; i++) {
        totalBase += conceptos[i].base;
        console.log(`${conceptos[i].descripcion} --- ${conceptos[i].base}`);
    }
    console.log(` ************************`)
    console.log(`Total: 
    Base: ${totalBase}
    IVA (21%): ${totalBase * 0.21}
    Total: ${totalBase * 1.21}
    `);
}

let more = true;

while (more) {
    const concept = {};
    concept.descripcion = Descripciones();
    concept.base = BaseImponible();
    conceptos.push(concept);
    more = OtroCampo();
}
showData();