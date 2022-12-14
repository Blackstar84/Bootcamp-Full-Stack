
class Persona {

    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    

    correr(){
        return "corriendo.."
    }

}

let carlos = new Persona("Carlos",38);

console.log(carlos.nombre);
console.log(carlos.edad);

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