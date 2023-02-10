import React, { useState } from "react";
import PropTypes from 'prop-types';
import './ProductCard.css';


/**
 * 
 * Nombre (producto)
 * Precio (producto)
 * Imagen (producto)
 * Input > cantidad
 * botón > agregar al carrito
 * props > propiedades
 */

const ProductCard = ({name, price, cover}) => {

    /* const style = {
        color: 'aqua',
        fontSize: '15px',
        backgroundColor: 'black'
    }; */

    const [bgColor, setBgColor] = useState('white');
    //console.log(bgColor);
    const [count, setCount] = useState(0);

    const handleClick = (color = 'white')=>{
        setBgColor(color);
        console.log('Color: ', bgColor);
    }

    const handleIncrement = () =>{
        setCount(count+1); // 1 -> 2 -> 3
        console.log('Cuenta: ', count); // 0 -> 1 -> 2
    }

    return(
        //<article style={style}>
        <article className="product-card" style={{ backgroundColor: bgColor }}>
            <img src={cover} alt={name}></img>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <button onClick={()=>handleClick('green')}>Verde</button>
            <button onClick={()=> handleClick('red')}>Rojo</button>
            <button onClick={()=> handleClick('blue')}>Azúl</button>
            <button onClick={()=> handleClick()}>Reset</button>

            <h2>{count}</h2>
            <button onClick={handleIncrement}>Aumentar en 1</button>

        </article>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string,
    cover: PropTypes.string,
    price: PropTypes.number
}


ProductCard.defaultProps = {
    name: 'sin registrar',
    cover: '',
    price: 0
    

};



export default ProductCard;
