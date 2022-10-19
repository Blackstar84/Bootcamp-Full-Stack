

class Programador {
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = 20;
    }

    obtenerDetalles(){
        return `${this.nombre} ${this.apellido}`
    }
}


class ProgramadorSenior {
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = 20;
    }

    obtenerDetalles(){
        return `${this.nombre} ${this.apellido}`
    }
}



let programdorBackend = new Programador('Erick', 'Sanvhez');
let programadorSenior = new ProgramadorSenior('Mario', 'Perez')


// function mostrarDatos(tipo){
//     console.log(tipo.obtenerDetalles());
//     console.log(tipo.edad);
// }


// mostrarDatos(programdorBackend);



console.log(programdorBackend instanceof ProgramadorSenior);