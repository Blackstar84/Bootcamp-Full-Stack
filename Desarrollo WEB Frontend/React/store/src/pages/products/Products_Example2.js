import { useState, useEffect } from "react";
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);    
    const [limit, setLimit] = useState(3);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    },[limit]);
   
    console.log(products);


    return(
        <section className="products">
            <h1>Productos</h1>
            <button onClick={()=>setLimit(5)}>Límite 5</button>
        </section>
    )
}

export default Products;