import Header from "./components/Header"
//Presionar ctrl+space va a buscar segun la ruta que archivos o componentes existen en esa ruta

/* import Imagen from "./logo.svg"; */
//Cuando importamos algo que no sea "JS" debemos ponerle su extensión

import gato from "./assets/Desarrollo humano.png";


import Footer from "./components/Footer";

const App = () => {
  //Aquí estará tu JS

  return (
    //Sólo debe haber un contenedor
    //Dentro del return estará todo tu diseño
    //Todos los componentes que importes deben empezar con Mayúscula
    <div>
      <Header></Header>
      <Header />
      <img src={gato} alt="imagen-Gato"></img>
      {/* <img src={Imagen}></img> */}

      <p>Hola soy una etiqueta p</p>
      <h1>HOLA</h1>
      <div>asdas</div>
      <div>asd</div>
      <Footer></Footer>
    </div>
  );
};

//No te olvides de exportar tu archivo para que otros archivos lo puedan encontrar
export default App;