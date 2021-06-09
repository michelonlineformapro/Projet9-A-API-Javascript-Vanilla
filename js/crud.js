//Charger le DOM
document.addEventListener('DOMContentLoaded', () =>{
    //Conteneur de produit
    const produits = document.querySelector('#produits');
    //Recuperer id du formulaire + submit sur le bouton
    /*
    L’événement submit est émis lorsqu’un formulaire est soumis au serveur.

    Notez que l’événement submit se déclenche uniquement sur l’élement form, et pas sur les éléments button ou input submit. (Les formulaires sont soumis, pas les boutons.)
     */
    const produitForm = document.querySelector('#ajouter-produit-form');
    //Declenche un evenement au click sur le bouton valider du formulaire ajouter
    produitForm.addEventListener('submit', ajouterProduit);



    //Methode fetch + url + methode GET + options
    fetch('http://localhost:3000/produits',{
        method:"GET",
        headers:{
            //Autorisé CORS
            'Access-Control-Allow-Origin': '*',
            //Type de contenu
            'Content-Type': 'application/json'
        }
    })
        //Promise + recup des données au format Json
        .then(response => response.json())
        //Boucle de lecture (le conteneur + nom de la collection) + appel de la fonction ajouterProduit
        .then(produits  => produits.forEach(afficherProduit))

    //Fonction ajouter produit
    function afficherProduit(produit){
        //Creer une div
        const produitDIV = document.createElement('div');
        //Ajout d'un data-set = id
        produitDIV.dataset.id = produit.id
        //Affection de id a la div creer + id des element de la collection
        produitDIV.id = "card-produit" + produit.id;
        //Class css Materialize
        produitDIV.className = 'col s3 m3';
        //Ajout HTML a la div creer avec concateneation ES6
        produitDIV.innerHTML =
            `        
                  <div class="card s3">
                    <div class="card-image">
                    <!--IMAGE = parametre produit de la fonction ajouterProduit(produit) + nom de element a afficher de notre db.json (ici imageProduit)-->
                      <img src="${produit.imageProduit}" width="25%" alt="${produit.nomProduit}" title="${produit.nomProduit}">
                      
                    </div>
                    <div class="card-content">
                        <span class="card-title red-text">${produit.nomProduit}</span>
                      <p>${produit.descriptionProduit}</p>
                    </div>
                    <div class="card-action">
                      <a href="#">Plus d'infos</a>
                    </div>
                  </div>
              
            `
        //Ajout de la div creer comme enfant de notre conteneur HTML produits
       produits.appendChild(produitDIV);


        /*********************************************************************************************************/
        //AJOUTER un bouton supprimer
        const btnDelete = document.createElement("button");
        //Ajouter un id unique a chaque bouton => qui match avec chaque carte
        btnDelete.setAttribute("id", `btnDelete${produit.id}`);
        //Ajout de texte au bouton + nom du produit
        btnDelete.innerHTML = `Supprimer :  ${produit.nomProduit}`;
        //Ajout de classe css materialize
        btnDelete.className = "col s4 waves-effect waves-light btn orange";
        //Ajout du bonton a chaque carte
        produitDIV.appendChild(btnDelete);
        //Au click sur le bouton on declenche une fonction avec un paramtre pour id
        btnDelete.addEventListener('click', () => deleteProduit(produit));

        /**********************************SUPPRIMER UN PRODUIT***********************************************************************/
        function deleteProduit(produit){
            //recuperer id de chaque carte
            const cardProduit = document.querySelector(`#card-produit${produit.id}`)
            //Test de debug pour visualiser id de chaque carte
            console.log(cardProduit);
            //Requète HTTP fetch avec URL + id methode delete
            return fetch(`http://localhost:3000/produits/${produit.id}`,{
                method: 'DELETE'
            })
                //On recupère le json
                .then(response => response.json())
                //On supprimer toute la carte
                .then(() => {
                    cardProduit.remove()
                })
        }
    }

    //Recupéré les données du formulaire
    //Recuperation des valeurs input name des champ du formulaire comme $_POST[''] en php
    function donneeDesFormulaires(event){
        //Supprime le comportement par defaut
        /*
        La méthode  preventDefault() de l 'interface Event indique à l'agent utilisateur que si l'événement n'est pas traité explicitement,
        son action par défaut ne doit pas être prise en compte comme elle le serait normalement. L'événement continue à se
        propager comme d'habitude, sauf si l'un de ses écouteurs appelle stopPropagation() ou stopImmediatePropagation() , dont l'un ou l'autre termine la propagation.
         */
        event.preventDefault();
        return{
            nomProduit: `${event.currentTarget.nomProduit.value}`,
            descriptionProduit: `${event.target.descriptionProduit.value}`,
            prixProduit: `${event.target.prixProduit.value}`,
            imageProduit: `${event.target.imageProduit.value}`,
        }
    }

    function resetForm(){
        return{
            nomProduit: this.value = '',
            descriptionProduit: this.value = '',
            prixProduit: this.value = '',
            imageProduit: this.value = '',
        }
    }


   //Fonction ajouter un produit
   function ajouterProduit(event){
        event.preventDefault();
        //recup et stock  des valeurs des inputs name (value) du formulaire dans une variable
       let newProduit = donneeDesFormulaires(event);
       //Test de debug
       console.log(newProduit)
       //retouné une reqsuté de type post http
       return fetch('http://localhost:3000/produits',{
           method: 'POST',
           headers:{
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
           },
           /*
           La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON.
           Optionnellement, elle peut remplacer des valeurs ou spécifier les propriétés
            à inclure si un tableau de propriétés a été fourni.
           */
           body: JSON.stringify(newProduit)
       })
           //Promise = reponse a la requete http fetch
           .then(response => response.json())
           //Les resultat sont apssé en paramètre de la fonction afficher
           .then(produit => afficherProduit(produit))
   }
})