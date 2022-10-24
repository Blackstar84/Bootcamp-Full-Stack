
let edad = "20";
let edad2 = "20z";
// console.log(typeof edad);


edad = Number(edad);
console.log(edad);
// console.log(typeof edad);



//NaN es Not-A-Number (No es Un Número) 

console.log(Number(edad2));

console.log(isNaN(edad));


let result = 0;


result = (isNaN(edad) ? "no se puede convertir": Number(edad) )
console.log(result);
