
const empresas = ['google', 'airbnb', 'twitter', 'amazon']

// iterando sobre un objeto array usando el metodo .map
const empresaTitle = empresas.map( (item) => item.toUpperCase() );

console.log(empresaTitle);


// iterando usando el meotodo forEach

const empresasNueva = empresas.forEach( (item) => item.toUpperCase() );
console.log(empresasNueva);