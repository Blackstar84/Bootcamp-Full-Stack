
class Coche {
    constructor(color, modelo){
        this._color = color;
        this.modelo = modelo;
    }

    acelerar(){
        console.log('acelear: ', this.modelo)
    }

    frenar(){
        console.log('frenar: ', this.color)
    }

}

let cocheTesla = new Coche('verde', 'tesla');

let cocheToyota = new Coche('azul', 'toyota');


console.log(cocheTesla);
console.log(cocheTesla.color);
cocheTesla.acelerar();
cocheTesla.frenar();

console.log(cocheToyota.color);