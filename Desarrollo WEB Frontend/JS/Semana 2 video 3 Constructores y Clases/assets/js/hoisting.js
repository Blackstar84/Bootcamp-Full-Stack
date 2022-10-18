


class Coche {
    constructor(color, modelo){
        this._color = color;
        this._modelo = modelo;
    }

    acelerar(){
        console.log('acelear: ', this.modelo)
    }

    frenar(){
        console.log('frenar: ', this._color)
    }

}

let cocheTesla = new Coche('verde', 'tesla');
console.log(cocheTesla);
console.log(cocheTesla.color);
cocheTesla.frenar();




// function acelerarCoche(){
//     console.log("acelerar");
// }
// acelerarCoche()


