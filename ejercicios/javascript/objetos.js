const Merlin =  {
    nombre: 'Merlin',
    clase: 'Mago',
    ataque: 5,
    salud: 20,
    sanacion: 5,
    ataca: function(enemigo){
        enemigo.salud = enemigo.salud - this.ataque;
    },
    curate: function(enemigo){
        this.salud += this.sanacion;
    },
    informacion: function(){
        console.log('Nombre: '+this.nombre
        + ' Clase: ' + this.clase
        + ' Ataque: ' + this.ataque
        + ' Salud: ' + this.salud    
        + ' Sanación: ' +this.sanacion);
        if (this.salud <= 0){
            console.log('Está muerto!');
        }
       
    }
}
const Anibal = {
    nombre: 'Aníbal',
    clase: 'Guerrero',
    ataque: 9,
    salud: 22,
    sanacion: 1,
    ataca: function(enemigo){
        enemigo.salud = enemigo.salud - this.ataque;
    },
    curate: function(enemigo){
        this.salud += this.sanacion;
    },
    informacion: function(){
        console.log('Nombre: '+ this.nombre
        + ' Clase: ' + this.clase
        + ' Ataque: ' + this.ataque
        + ' Salud: ' + this.salud    
        + ' Sanación: ' +this.sanacion);
        if (this.salud <= 0){
            console.log('Está muerto!');
        }
       
    }
}

Anibal.informacion();
Merlin.informacion();

console.log('++++++++++++++++++++++++++++');

Anibal.ataca(Merlin);
Merlin.ataca(Anibal);

Anibal.informacion();
Merlin.informacion();

console.log('++++++++++++++++++++++++++++');

Anibal.ataca(Merlin);
Merlin.curate();

Anibal.informacion();
Merlin.informacion();

console.log('++++++++++++++++++++++++++++');

Anibal.ataca(Merlin);

Anibal.informacion();
Merlin.informacion();