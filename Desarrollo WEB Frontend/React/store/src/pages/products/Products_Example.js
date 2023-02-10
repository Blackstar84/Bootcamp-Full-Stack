import React, { useState, useEffect } from "react";
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    /* Mount */
    useEffect(()=>{
        console.log('Hola');
    },[]); // Se ejecuta al montar el componente
    
    /* UPDATE */
    useEffect(()=>{
        console.log('Actualización');
    }); // Se ejecuta cada vez que se actualiza el componente

    
    useEffect(()=>{
        console.log('Los productos han sido Actualizados');
    },[products]) // Se ejecuta cuando una de las dependencias cambia Ej: Los productos

    /* Unmount */
    useEffect(()=>{
        return()=>{
            console.log('Adiós');
        }
    },[]) // Se ejecuta cuando se desmonta el componente, es decir cuando ya no vemos el componente

    console.log(products);


    return(
        <section className="products">
            <button onClick={()=>setProducts([{id: 0},{id: 1}])}>Load Products</button>
        </section>
    )
}

export default Products;