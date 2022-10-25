
let mes = prompt("¿En que mes te encuentra (ingresa un numero)?");
let estacion;
let EstacionImgHtml;

if (mes == 1 || mes == 2 || mes == 3 ){
    estacion = "Primavera";
    EstacionImgHtml = "<img height='200px' src='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/03/20/15215747794041.jpg'> </img>";
    console.log("estamos en primavera");
} else if (mes == 4 || mes == 5 || mes == 6 ) {
    estacion = "Verano";
    EstacionImgHtml = "<img height='200px' src='https://i2.wp.com/clubdefotografia.net/wp-content/uploads/2016/07/Beach-chairs-on-sand989645.jpg?fit=1024%2C640&ssl=1'> </img>";
} else if (mes == 7 || mes == 8 || mes == 9 ) {
    estacion = "Otoño";
    EstacionImgHtml = "<img height='200px' src='https://cdn.milenio.com/uploads/media/2019/09/20/el-de-septiembre-es-la_0_10_500_312.jpg'> </img>";
} else {
    estacion = "Invierno";
    EstacionImgHtml = "<img height='200px' src='https://conceptodefinicion.de/wp-content/uploads/2017/05/Invierno2.jpg'> </img>";
}





document.getElementById("estacion_ejercicio").innerHTML =  EstacionImgHtml;
