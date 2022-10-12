
// Tipos de datos en Javascript

console.log("Tipos datos en JS");


// Tipo de dato String
var username = "Erick";
console.log(username);
console.log(typeof username);

// para representar el tipo dato usamos typeof
console.log(typeof username);


// Tipo de dato numerico
var edad = 20;
console.log(edad);
console.log(typeof edad);


// Tipo de dato booleano con los valores: true / false
var estado_opcion = false;
console.log(estado_opcion);  
console.log(typeof estado_opcion);


// Tipo de dato Objeto
var auto = {
    color: "verde",
    modelo: "tesla",
    precio: 123,
    es_stock: true
}

console.log(auto);
console.log(typeof auto);


// reasignar datos
var nombreCompleto = "Pedro Mesa";
console.log(nombreCompleto); 
nombreCompleto = "Erick";
console.log(nombreCompleto); 


// reasignar en objetos
auto.es_stock = false;
console.log(auto);


// otros tipos de datos

// Tipo de dato undefined

var identidad;

console.log(identidad);
console.log(typeof identidad);


// tipo de dato null
var compra_tv = null;
console.log(compra_tv);
console.log(typeof compra_tv);


// tipo de dato functions;
function acelerar(){
    
    console.log("acelerando");
    console.log("auto power");
}

console.log(acelerar);
console.log(typeof acelerar);

// Tipo de dato Symbol
var simbolo = Symbol("dato unico");
console.log(simbolo);
console.log(typeof simbolo);