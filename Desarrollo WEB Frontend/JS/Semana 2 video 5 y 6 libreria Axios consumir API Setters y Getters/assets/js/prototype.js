

function Carro(color, modelo){
    this.color = color;
    this.modelo = modelo;

    this.acelerar = function (){
        return 'acelerando x10';
    }

}

Carro.prototype.velocidad = '200 km/h';
Carro.prototype.frenar = function(){
    return "frenar auto";
}


let carro1 = new Carro('verde');
console.log(carro1);
carro1.velocidad = '100 km/h';
console.log(carro1.velocidad);
console.log(carro1.frenar());


let carro2 = new Carro('rojo');
console.log(carro2);
console.log(carro2.velocidad);

console.log(carro2.frenar());
