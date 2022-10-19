
function procesarPago1(){
    console.log("validando pago con tarjeta 1");
}

function procesarPago2(){
    console.log("validando pago con tarjeta 2");
}

function procesarPago3(){
    let today = new Date();

    console.log("validando pago con tarjeta 3", today );
}

// procesarPago1()
// procesarPago2()
// procesarPago3()


// setTimeout( () => console.log("ejecutando prceso aync"),  3000);

setInterval(procesarPago3, 2000);

procesarPago1()
