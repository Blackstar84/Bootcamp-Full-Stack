import axios from 'axios'

const URL = 'https://63ce97606d27349c2b7194ab.mockapi.io/productos'

const obtenerProductos = async()=>{
    try{
        let { data } = await axios.get(URL)
        return data
    }catch(error){
        console.log(error);
    }
};


export{
    obtenerProductos
}