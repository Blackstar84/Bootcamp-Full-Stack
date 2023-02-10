import React from "react";
import PropTypes from 'prop-types';
import './ProductCard.css';
import Card from '@mui/material/Card';
import { CardMedia, CardContent } from "@mui/material";
import Typography from '@mui/material/Typography';


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
        <Card sx={{ maxWidth: 345}}>
            <CardMedia component="img" alt="" height="240" image={cover} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                ${price}
                </Typography>
            </CardContent>
        </Card>
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
