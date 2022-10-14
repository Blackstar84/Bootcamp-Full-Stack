
let ejercicioTitle = "<h2> Preguntas y Respuestas desde JS</h2>";

console.log(ejercicioTitle);

document.write(ejercicioTitle)

let capitalPeru, capitalChile, capitalColombia;

 capitalPeru = window.prompt("¿Cual es la capital de Peru?");

 capitalPeru = "<p>" + capitalPeru + "</p>"
 document.write(capitalPeru);


// capitalChile = window.prompt("¿Cual es la capital de Chile?");
// capitalChile = "<p>" + capitalChile + "</p>"
// document.write(capitalChile);


// capitalColombia = window.prompt("¿Cual es la capital de Colombia?");

// capitalColombia = "<p>" + capitalColombia + "</p>"
// document.write(capitalColombia);



// let CountpaisesLatam;
// CountpaisesLatam = window.prompt("¿Cuantos paises tiene latoinoAmerica");
// document.write(CountpaisesLatam * 2);


let juegoFab;
juegoFab = window.prompt("¿Cual es tu juego favorito?");

document.getElementById("caja_juegos").innerHTML = "<p style='asdasdcolor:white'> "+ juegoFab + "</p>";