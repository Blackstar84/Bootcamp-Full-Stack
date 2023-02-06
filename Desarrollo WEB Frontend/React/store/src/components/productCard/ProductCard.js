import React from "react";

/**
 * 
 * Nombre (producto)
 * Precio (producto)
 * Imagen (producto)
 * Input > cantidad
 * botón > agregar al carrito
 * props > propiedades
 */

const ProductCard = (props) => {

    const style = {
        color: 'aqua',
        fontSize: '15px',
        backgroundColor: 'black'
    };

    return(
        <article style={style}>
            {props.name || 'sin registrar'}
        </article>
    )
}

export default ProductCard;
