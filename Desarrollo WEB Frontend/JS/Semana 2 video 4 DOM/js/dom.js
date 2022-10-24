

let h1Title =  document.getElementById("title_web");

console.log(h1Title.innerHTML);

h1Title.innerHTML = '<span>Hola DOM </span>  ';


// let container = document.getElementsByClassName('container');
// console.log(container);
// container[0].innerHTML = "<p> texto del container </p>"


let newContainer = document.querySelector('div.container div.nav')

newContainer.style.color = "blue";
newContainer.style.fontSize = "30px";


let newContainerPrice = document.querySelectorAll(".price");

 console.log(newContainerPrice);

for (let item of newContainerPrice){
    console.log(item.innerHTML);
}

function mostrarMensaje(){
    alert("diste click");
}


document.getElementById("buy").onclick = mostrarMensaje;


// document.getElementById("email").onclick = () => {
//     document.getElementById("email").style.background = "green";
// }

// document.getElementById("email").onchange = () => {
//     console.log(document.getElementById("email").value);
//     document.getElementById("email").style.background = "green";
// }


document.getElementById("email").addEventListener('change', (evento) => {

    console.log(evento.target);

})




document.getElementById("password").addEventListener('change', (evento) => {

    let mypass = evento.target.value;
    console.log(mypass);

    if (mypass.length <= 5 ||  !mypass.includes('$') ){
        alert("agregar minimo 8 caracteres a la contraseña" + " " + mypass);
    } else {
        alert("la contrasena es correcta!" + " "+ mypass);
    }

})

document.getElementById("pwd").addEventListener('mouseover', (evento) => {

    evento.target.style.fontSize = "20px" ;
    evento.target.style.color = "green" ;
})

document.getElementById("pwd").addEventListener('mouseout', (evento) => {

    evento.target.style.fontSize = "15px" ;
    evento.target.style.color = "red" ;
})




document.getElementById("hola").addEventListener('load', (evento) => {

    console.log("el boton se renderizo completamente");
})




// function botonCargado(){
//     alert("botonCargado 100%");
// }


// function webCargada(){
//     alert("webCargada 100%");
// }


window.addEventListener("load", function(event) {
    console.log("'Todos los recursos terminaron de cargar!");
  });


window.onload = function (){
    console.log("'Todos los recursos terminaron de cargar HTML!");
}


// El evento load se activa en elementos que cargan contenido externo,
//  como img, iframe, etc.