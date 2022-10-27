import Header from "./components/Header"
//Presionar ctrl+space va a buscar segun la ruta que archivos o componentes existen en esa ruta


const App = ()=>{
//Aquí estará tu JS

  return (
    //Sólo debe haber un contenedor
    //Dentro del return estará todo tu diseño
    //Todos los componentes que importes deben empezar con Mayúscula
    <div>
      <Header></Header>
      <Header />
      <h1>HOLA</h1>
      <div>asdas</div>
      <div>asd</div>
    </div>
  )
}

//No te olvides de exportar tu archivo para que otros archivos lo puedan encontrar
export default App;