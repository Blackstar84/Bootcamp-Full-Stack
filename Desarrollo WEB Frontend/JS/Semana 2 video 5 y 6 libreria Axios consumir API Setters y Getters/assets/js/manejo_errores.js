
let username = 'mario';
let email = false;

try {
    console.log(username);
    if (email == false){
        throw 'email invalido';
    }
    // console.log(10 + b);
} catch (error){
    console.log('controlado error, ',error);
} finally {
    console.log("el programa esta controlado");
}


console.log('el modulo continua');