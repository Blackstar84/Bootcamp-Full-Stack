
var autos = ["tesla", "nissan", "toyota"];
console.log(autos);


console.log(typeof autos);


var lenguajes_favoritos = ["javascript", "python", 20];
console.log(lenguajes_favoritos);

autos.forEach(element => {
    console.log(element);
});

for (let index = 0; index < autos.length; index++) {
    const element = autos[index];
    console.log(element);
    
}