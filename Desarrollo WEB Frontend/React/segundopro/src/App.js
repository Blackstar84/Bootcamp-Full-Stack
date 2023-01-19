import Header from "./components/Header";

import Imagen from "./logo.svg";
import Footer from "./components/Footer";

const App = () => {


  return(

    <div style={{backgroundColor:"red"}}>
        <Header></Header>
        <Header/>
        <p>Hola soy una etiqueta p</p>
        <h1>Hola soy REACT</h1>
        <img src={Imagen}></img>
        <Footer></Footer>
    </div>
  )

}

export default App;