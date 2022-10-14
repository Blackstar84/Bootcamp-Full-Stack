

// La estructura selectiva switch selecciona una de entre multiples
// alternativas.

let focoHtml;

let opcion_foco = prompt("Cual interupetor eliges?");

opcion_foco = Number(opcion_foco);

switch (opcion_foco) {
    case 1: case 2:
        console.log("luz verde encendida");
        focoHtml = "<img src='https://www.planetaelectronico.com/images/productos/thumbnails/bombilla-e27-25w-color-verde-1-10136_thumb_450x450.png'> </img>"
        break;
    case 3: case 4:
        console.log("luz azul encendida");
        focoHtml = "<img height='200px' src='https://www.grupoeir.com.mx/tienda/7585/792.jpg'> </img>"
        break;
    default:
        console.log("luces apagadas");
        focoHtml = "<img src='https://www.mndelgolfo.com/blog/wp-content/uploads/2017/08/luz-incandecente.jpg'> </img>"
        break;
}

document.getElementById("foco_ejercicio").innerHTML = focoHtml;
