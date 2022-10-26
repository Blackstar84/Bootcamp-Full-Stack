

class Producto {

    static contadorProducts = 0;

    constructor(titulo, precio){
        this._titulo = titulo;
        this._precio = precio;
        ++Producto.contadorProducts;
    }

    get titulo(){
        return this._titulo;
    }

    get precio(){
        return this._precio;
    }


    estadoProducto(){
        return `idProducto: ${Producto.contadorProducts} Titulo: ${this._titulo} Precio: usd$ ${this._precio}
        `;
    }

}


class Orden{
    
    constructor (){
        this._canasta = [];
        this._dataNew = true;
    }

    // get dataNew(){
    //     return this._dataNew
    // }

    agregarProducto(producto){
        this._canasta.push(producto);
        console.log(`se agrego el producto ${producto.titulo}`)
    }

    calcularCanasta(){
        let precioTotal = 0;
        this._canasta.forEach(function (item){
            precioTotal += item.precio;
        })
        return precioTotal;
    }

    mostrarOrdenFinal(){
        this._canasta.forEach(function (item){
           // console.log(this._dataNew);
            console.log(` Titulo: ${item.titulo} PrecioUnitario: ${item.precio}`)
        })

        return `Monto Total: ${this.calcularCanasta()}`
    }

}



let producto1 = new Producto('Iphone', 123);
// console.log(producto1.titulo);
// console.log(producto1.precio);
// console.log(producto1.estadoProducto());

let producto2 = new Producto('Xiaomi', 333);
// console.log(producto2.estadoProducto());

let producto3 = new Producto('Samsung', 222);
//console.log(Producto.contadorProducts);


const crearOrden = new Orden()

crearOrden.agregarProducto(producto1);
crearOrden.agregarProducto(producto2);
crearOrden.agregarProducto(producto3);


crearOrden.calcularCanasta();

const ordenFinal =  crearOrden.mostrarOrdenFinal();

console.log(ordenFinal);