//Charger le DOM
document.addEventListener('DOMContentLoaded', () =>{

    const produits = document.querySelector('#produits');

    fetch('http://localhost:3000/produits',{
        method:"GET",
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(produits  => produits.forEach(afficherProduit))

    function afficherProduit(produit){

        const produitDIV = document.createElement('div');
        produitDIV.dataset.id = produit.id
        produitDIV.id = "card-produit" + produit.id;
        produitDIV.className = 'col s3 m3';
        produitDIV.innerHTML =
            `
            
                  <div class="card s3">
                    <div class="card-image">
                      <img src="${produit.imageProduit}" width="25%">
                      <span class="card-title">${produit.nomProduit}</span>
                    </div>
                    <div class="card-content">
                      <p>${produit.descriptionProduit}</p>
                    </div>
                    <div class="card-action">
                      <a href="#">Plus d'infos</a>
                    </div>
                  </div>
              
            `

       produits.appendChild(produitDIV)

    }
})