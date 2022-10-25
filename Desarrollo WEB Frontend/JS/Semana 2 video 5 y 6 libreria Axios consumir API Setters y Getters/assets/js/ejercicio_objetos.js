
const apiMusic = [
    {
        title: 'music 2',
        gender: 'rock',
        imageAlbun: 'https://assets.materialup.com/uploads/528369f6-ad1c-4087-8023-cc54404835db/preview.png',
        stream: 'https://media-dojopy.s3.amazonaws.com/podcast.mp3'
    },
    {
        title: 'music 1',
        gender: 'pop',
        imageAlbun: 'https://community.spotify.com/t5/image/serverpage/image-id/97398i4B732DE5FED1DBAC?v=v2',
        stream: 'https://media-dojopy.s3.amazonaws.com/podcast.mp3'
    },
    {
        title: 'music 3',
        gender: 'metal',
        imageAlbun: 'https://assets.materialup.com/uploads/528369f6-ad1c-4087-8023-cc54404835db/preview.png',
        stream: 'https://media-dojopy.s3.amazonaws.com/podcast.mp3'
    },
    {
        title: 'music 4',
        gender: 'indie',
        imageAlbun: 'https://assets.materialup.com/uploads/528369f6-ad1c-4087-8023-cc54404835db/preview.png',
        stream: 'https://media-dojopy.s3.amazonaws.com/podcast.mp3'
    },
]

// console.log(apiMusic);



function mostrarAlbun(){

    let totalCard;

    apiMusic.map( function (item){
        console.log(item);

        let componenteCard = `<div class="card" style="width: 18rem;">
        <img src="${item.imageAlbun}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${item.title} </h5>
          <p class="card-text"> <b> ${item.gender}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          <audio controls>
            <source src="${item.stream}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        </div>
      </div>`

      totalCard += componenteCard;

    })

    document.getElementById('lista_musicas').innerHTML = totalCard;

}


// mostrarAlbun();

apiMusic.forEach(element => console.log(element));


