
export default function GroupProducts({productos}){
    console.log(productos);
    return(
    //Dentro del map que utilizamos abajo
    //El primer parámetro es donde se va a almacenar la información
    //El segundo es el índice
        <div className='container'>
            <div className='row mt-3'>
                
                {productos.map((prod,i)=>(
                    <div className='col-6 col-lg-3' key={i}>
                        <div className='card mb-4'>
                            <img src={prod.avatar} alt={prod.avatar} className="card-img-top" />
                            <div className='card-body'>
                               <h6 className='card-title'>{prod.nombre}</h6>
                               <span className='fw-bold'>S/ {prod.precio}</span> 
                            </div>                        
                        </div>
                    </div>    
                ))}

            </div>
            
        </div>
    )

}