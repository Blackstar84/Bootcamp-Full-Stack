import { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=3')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
   
    //console.log(products);


    return(
        <section className="products">       
        <div className="content">
        {products.map(({id,title, image, price}) =>(
                <ProductCard key={`product-${id}`} name={title} cover={image} price={price}>

                </ProductCard>
            ))}
            </div>     
            
            
        </section>
    )
};

export default Products;