


class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(value){
        this._nombre = value;
    }

    hablar(){
        return 'hola!'
    }
}


const mario = new Persona('mario', 'vasquez');

// usando getters
console.log(mario.nombre);

// actualizar con setters
mario.nombre = 'MARIO CARLOS';


console.log(mario.nombre);
