document.addEventListener('DOMContentLoaded', () => {
    const amiibo = document.querySelector('#amiiboContainer');

    fetch('https://www.amiiboapi.com/api/amiibo/',{
        method: 'GET',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
    })
        .then(reponse => reponse.json())
        .then(result => result.amiibo.forEach(afficherAmiibo))
        .catch(error => console.log('erreur', error))


    function afficherAmiibo(amiiboData){
        //creation d'un div
        const amiiboDIV = document.createElement('div');
        amiiboDIV.className = 'col s3 m3';
        amiiboDIV.innerHTML = `
            <img src="${amiiboData.image}" alt="" title="" width="25%" />
            <ul class="collection">
                <li class="collection-item">
                    <p>${amiiboData.amiiboSeries}</p>
                </li>
                <li class="collection-item">
                    <p>${amiiboData.name}</p>
                </li>
            </ul>
        `
        amiibo.appendChild(amiiboDIV);
    }

})