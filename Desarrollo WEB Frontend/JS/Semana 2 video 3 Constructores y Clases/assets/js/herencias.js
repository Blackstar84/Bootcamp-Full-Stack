

class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    correr(){
        return "corriendo.."
    }

}


class Empleado extends Persona {
    constructor(nombre, edad, empleado_id, salario){
        super(nombre, edad);
        this.empleado_id = empleado_id;
        this._salario = salario;
    }

    trabajar(){
        return `Hola ${this.nombre} ${this.empleado_id} ${this._salario} `
    }

}


let empleadoErick = new Empleado('Erick', 22, 1, '$1');

console.log(empleadoErick);
console.log(empleadoErick.nombre);
console.log(empleadoErick.correr());

console.log(empleadoErick.trabajar());