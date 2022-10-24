

let persona = {
    nombre: "erick",
    apellido: "mesa",
    email: "hola@dojopy.com",
    edad: 25
}

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.email);

persona.nombre = 'Pedro';
// console.log(persona);

persona.direcction = 'Peru/lima';
// console.log(persona);

delete persona.email;
// console.log(persona);


// otra forma para crear objetos de forma explicita

let persona2 = new Object();
persona2.email = 'email@gmail.com';
persona2.nombre = 'Pedro';

// console.log(persona2);


// agregar metodos al objetos

let persona3 = {
    nombre: "erick",
    apellido: "mesa",
    email: "hola@dojopy.com",
    edad: 25,
    dni: 1212121,
    nombreCompleto: function () {
        return this.nombre +" "+ this.apellido
    },
    validarIdentidad: function () {
        if (this.dni == 121212){
            return 'identidad válidad'
        } else {
            return 'no tiene acceso'
        }
    }
}

console.log(persona3);
console.log(persona3.apellido);

let nombreCompletoOk =  persona3.nombreCompleto();

console.log(nombreCompletoOk);

let valiandoIndetidad = persona3.validarIdentidad();
console.log(valiandoIndetidad);