//import logo from '../logo.svg';
import '../App.css';
import Navbar from '../components/Navbar'
import {useState, useEffect } from "react"
import { obtenerProductos } from '../services/productosServices'
import GroupProducts from '../components/GroupProducts';
import Carrousel from '../components/Carrousel'

export default function VistaPrincipal(){

  //productos es donde se va a almacenar toda la información
  //setProductos es la función que lo puede modificar
  //Luego pasamos el parámetro inicial en esta caso va a ser en forma de objeto
  const [productos, setProductos] = useState([]);

  const getProductos = async() =>{
      try{
          let productosObtenidos = await obtenerProductos()
          setProductos(productosObtenidos);
      }catch(error){
          console.log(error);
      }
  }    

  //Sirve para que no se genere un bucle y para que se muestren los productos
  useEffect(()=>{
      getProductos();
  },[])

  return(
      <div>
          <Navbar></Navbar>
          <Carrousel></Carrousel>
          <GroupProducts productos={productos} />
      </div>
  )

}