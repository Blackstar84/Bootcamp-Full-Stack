

//Funcion constructor de objetos
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email,

    this.correr = function (){
        return `corriendo maratom con ${this.nombre}`;
    }

    this.aprender = function (){
        return `aprendiendo codigo ${this.email}`;
    }
}

let mario = new Persona('mario', 'vasqquez', 'mario@gmail.com');

console.log(mario);

console.log(mario.nombre);

console.log(mario.apellido);

console.log(mario.correr());

console.log(mario.aprender());

let carlos = new Persona('carlos', 'sanchez', 'carlos@gmail.com')

console.log(carlos);
console.log(carlos.email);