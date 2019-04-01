const TareasListado = [];

function Menu(){
    console.log(`Tareas: Menú: 
        1. Listado de tareas
        2. Añadir nueva tarea
        3. Terminar tarea
        4. Borrar tarea
        5. Salir
    `);
    let opcion;
    while (!opcion){
        const prompt = window.prompt('Selecciona una opción del menú:');
        const regex = /^[12345]$/;
        if (regex.test(prompt)){
            opcion = parseInt(prompt);
        }
    }
    return opcion;
}
function MostrarTareas(){
console.log('Tareas');
    for (let i = 0; i < TareasListado.length; i++) {
        console.log(`${i+1} - ${TareasListado[i].descripcion} ${TareasListado[i].hecho ? '(Hecho)' : ''}`);
    }

}

function addNew() {
    console.log('Añadir neuva tarea');
    let text;
    while (!text){
        text = window.prompt('Introduce la descripción:');
    }
    TareasListado.push({
        descripcion: text,
        hecho: false
    });
 }
function marcarHecha(){
    MostrarTareas();
    let tarea;
    while (!tarea) {
        const prompt = window.prompt('Introduce el número de tarea: ');
        const regex = /^\d$/;
        if(regex.test(prompt)){
            tarea = parseInt(prompt);
            if (tarea < 1 || tarea > TareasListado.length){
                tarea = null;
            }
        }
    }
TareasListado[tarea - 1].hecho = true;
}
function borrarTarea() {
    MostarTareas();
        let tarea;
        while(!tarea) {
            const prompt = windo.prompt('Introduce el número de tarea: ');
            const regex = /^\d$/;
            if(regex.test(prompt)){
                tarea = parseInt(prompt);
                if (tarea < 1 || tarea > TareasListado.length){
                    tarea = null;            
        }
    }
} TareasListado.splice(tarea - 1, 1);

}

function ejecutaOpcion(opcion){
    switch(opcion){
        case 1:
        MostrarTareas();
        break;
        case 2:
        addNew();
        break;
    case 3:
        marcarHecha();
        break;
    case 4:
        borrarTarea();
        break;
    case 5:
        break;
    default: console.log('Opción no válida');
    }
}
let opcion;
while (opcion !== 5) {
    opcion = Menu();
    ejecutaOpcion(opcion);
}

