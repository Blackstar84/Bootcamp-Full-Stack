
function validandoIndetidad(job_id){
    console.log('validnando identidad...', job_id);
    return true
}


let miPromesa = new Promise( (resolverOk, rechazar) => {


    setTimeout(() => {
        let estadoValidacion = validandoIndetidad(1);
        if (estadoValidacion){
            resolverOk("Pedro");
        } else {
            rechazar("Pedro");
        }
    } , 3000);
}  )


// miPromesa.then(
//     () => console.log("identidad válida") ,
//     () => console.log("identidad Inválida, vuelve a intentar") ,
//     )


// miPromesa.then(
//     (nombre) => console.log("identidad válida", nombre) 
// ).catch(
//     (nombre) => console.log("identidad Inválida, vuelve a intentar", nombre)
// )



// validandoIndetidad(2);



// let miPromesa = new Promise((resolver, rechazar) => {
//     let expresion = true;
//     if(expresion)
//         resolver('Resolvió correcto');
//     else
//         rechazar('Se produjo un error');    
// });

//miPromesa.then( valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));



//async indica que una función regresa una promesa
// async function miFuncionConPromesa(){
//     return 'saludos con promesa y async';
// }

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa );
}

funcionConPromesaYAwait();
validandoIndetidad(12);