

class Mascota{

    static numeroMascotas = 1;

    constructor(nombre){
        this._nombre = nombre;
        // this._actualizandoMascotas = ++ Mascota.numeroMascotas;

    }

    maullar(){
        ++ Mascota.numeroMascotas;
        return "miauu";
    }

    static aranar(){
        console.log('arañar mueble');
    }
}



const mascota_piki = new Mascota("Piki");

console.log(mascota_piki.maullar());


Mascota.aranar();
console.log(Mascota.numeroMascotas);


const mascota_pack = new Mascota("Pack");
console.log(mascota_pack.maullar());


Mascota.aranar();
console.log(Mascota.numeroMascotas);

