console.log("ejecutando app price");

let dataUser; 

function updatePrice(){

    axios.get('https://ipapi.co/json/').then(function (response) {
        
        dataUser = response.data;
        console.log(dataUser);

        dataUser.country = 'CL';

        let contryFlag = `<img
        alt="United States"
        height="30px"
        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/${dataUser.country}.svg"/>`


        Array.from(document.getElementsByClassName('image_country')).forEach( function (item){
            item.innerHTML = contryFlag;
        })



        if (dataUser.country === 'PE'){
            
            // document.querySelectorAll('.image_country').forEach( function (item){
            //     item.innerHTML = contryFlag;
            // })

            document.getElementById('price_free').innerHTML = 'S/ 0.0';
            document.getElementById('price_pro').innerHTML = 'S/ 50';
            document.getElementById('price_enter').innerHTML = 'S/ 100';


        } else if (dataUser.country === 'MX'){
            document.getElementById('price_free').innerHTML = 'MX$ 0.0';
            document.getElementById('price_pro').innerHTML = 'MX$ 200';
            document.getElementById('price_enter').innerHTML = 'MX$ 1,000';
        } else if (dataUser.country === 'CL'){
            document.getElementById('price_free').innerHTML = 'CL$ 0.0';
            document.getElementById('price_pro').innerHTML = 'CL$ 300';
            document.getElementById('price_enter').innerHTML = 'Cl$ 2,000';
        }


      })

}



updatePrice();


