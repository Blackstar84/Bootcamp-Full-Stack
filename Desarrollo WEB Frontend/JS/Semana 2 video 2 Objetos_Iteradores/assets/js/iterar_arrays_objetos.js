

let autos = ['tesla', 'toyota', 'nissan', 'audi'];

for (let contador = 0; contador < autos.length; contador++){
    console.log(contador);
    console.log(autos[contador]);
}


// iterar sobre un array usando el metodo map

autos.map( function (elemento){
    console.log(elemento);
} )


// iterar sobre objetos

let persona = {
    nombre: "erick",
    apellido: "mesa",
    email: "hola@dojopy.com",
    edad: 25,
    hobiee: ['musica', 'pintar', 'programar']
}

console.log( Object.keys(persona));

console.log( Object.values(persona));

console.log( Object.entries(persona));



// acceder a las propiedad con for in
for (elemento in persona){
    console.log(elemento);
    console.log(elemento, persona[elemento]);
}

let personaNueva = {
    nombre: "erick",
    apellido: "mesa",
    email: "hola@dojopy.com",
    edad: 25,
    hobiee: ['musica', 'pintar', 'programar']
}


Object.keys(personaNueva).map( function (elemento){
    if (elemento == 'hobiee'){
        console.log(personaNueva[elemento]);

        personaNueva[elemento].map( function (item){
            console.log(item);
        }
        )
    }
})



personaNueva.hobiee.map( function (elemento){
    console.log(elemento);
})