
// declarar funciones

function lanzarDado(dado, intentos){
    console.log("lanzar dado", dado, intentos);
    console.log(arguments[0]);
    console.log(arguments[1]);
    if (dado == 'seis'){
        return 'ganaste el juego';
    } else {
        return 'sigue jugando';
    }
}


// let salidaLazarDado;
// salidaLazarDado = lanzarDado('uno', 10);
// console.log(salidaLazarDado);

// Declarando funcion del tipo expresion
let saludarVecino = function (nombre) {console.log('hola vecino', nombre)}

let concatenarNombres = function (n1, n2) {console.log(n1 + " "+  n2)}

let saludar = function (a, b) {return a + b}

// saludarVecino('Erick');
// concatenarNombres('pablo', 'miguel');
let salida =  saludar(10, 20);

// console.log(salida);


// declarar funciones del tipo flecha

const miFuncionFlecha = (nombre, apellido) => {
    console.log("hola desde la funcion flecha", nombre, apellido);
}

miFuncionFlecha('pedro', 'velasquez');


const autos = {
    color: "verde",
    precio: 10
}

function trabajarObjetos(data){
    console.log(data.color);
    console.log(data.precio);
}


trabajarObjetos(autos);