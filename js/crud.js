//Charger le DOM
document.addEventListener('DOMContentLoaded', () =>{

    const produits = document.querySelector('#produits');

    const produitForm = document.querySelector('#ajouter-produit-form');
    produitForm.addEventListener('submit', ajouterProduit);

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

    function donneeDesFormulaires(event){
        event.preventDefault();
        return{
            nomProduit: `${event.target.nomProduit.value}`,
            descriptionProduit: `${event.target.descriptionProduit.value}`,
            prixProduit: `${event.target.prixProduit.value}`,
            imageProduit: `${event.target.imageProduit.value}`,
        }
    }


   //Fonction ajouter un produit
   function ajouterProduit(event){
        event.preventDefault();
        //recup et test des valeurs des inputs name (value) du formulaire
       let newProduit = donneeDesFormulaires(event);
       console.log(newProduit)
       //retouné une reqsuté de type post http
       return fetch('http://localhost:3000/produits',{
           method: 'POST',
           headers:{
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(newProduit)
       })
           .then(response => response.json())
           .then(produit => afficherProduit(produit))
   }
})