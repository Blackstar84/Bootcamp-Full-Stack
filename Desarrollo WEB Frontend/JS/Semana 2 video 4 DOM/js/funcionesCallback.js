

function saludar(nombre){
    console.log("buenas dias ", nombre);
}

function ejercitar(compras ,callback, nombre){
    console.log("corriendo..");
    console.log(compras);
    callback(nombre);
}


ejercitar('comprar frutas' , saludar, 'mario');