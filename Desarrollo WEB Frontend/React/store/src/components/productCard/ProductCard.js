import React from "react";
import PropTypes from 'prop-types';


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

    return(
        //<article style={style}>
        <article>
            <img src={cover} alt={name}></img>
            <h2>{name}</h2>
            <h3>{price}</h3>

        </article>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string
}


ProductCard.defaultProps = {
    name: 'sin registrar',
    

};



export default ProductCard;
