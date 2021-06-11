//Charger le DOM
document.addEventListener('DOMContentLoaded', () => {
    //Conteneur de produit id HTML
    const produits = document.querySelector('#produits');
    //Recuperer id du formulaire + submit sur le bouton
    const produitForm = document.querySelector('#ajouter-produit-form');
    //Declenche un evenement au click sur le bouton valider du formulaire ajouter
    produitForm.addEventListener('submit', ajouterProduit);

    //Conteneur du formulaire d'edition
    const updateForm = document.querySelector('#updateForm');

    /********************************** METHODE GET JSON LOCALHOST:3000 ****************************/

    //Methode fetch + url + methode GET + options
    fetch('http://localhost:3000/produits', {
        method: "GET",
        headers: {
            //Autorisé CORS
            'Access-Control-Allow-Origin': '*',
            //Type de contenu
            'Content-Type': 'application/json'
        }
    })
        //Promise + recup des données au format Json
        .then(response => response.json())
        //Boucle de lecture (le conteneur + nom de la collection) + appel de la fonction ajouterProduit
        .then(produits => produits.forEach(afficherProduit))

    /**************************************AFFICHER LES CARTES DE PRODUIT*************************/

    //Fonction ajouter produit
    function afficherProduit(produit) {
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
                      <p>Prix : ${produit.prixProduit} €</p>
                    </div>
                  </div>`
        /*****************************AJOUTER LES CARTES DE PRODUIT********************************/
        //Ajout de la div creer comme enfant de notre conteneur HTML produits
        produits.appendChild(produitDIV);
        addBtnSupprimer(produit);

        /********************************************LES BOUTONS***********************************************/

        /*****************************************BOUTON SUPPRIMER****************************************************************/


        /***********************************BOUTON DETAILS PRODUIT*************************************************/
            //Bouton details
        const btnDetails = document.createElement('button');
        //Ajouter un attribut ID
        btnDetails.setAttribute("id", `${produit.id}`);
        //texte + id a afficher dans le bouton
        btnDetails.innerHTML = 'Details'
        //Ajout classe css Materialize sur le bouton
        btnDetails.className = "col s4 waves-effect waves-light btn purple lighten-3";
        //Ajouter le bouton en tant qu'enfant de la div produitDIV(carte)
        produitDIV.appendChild(btnDetails);
        //Decelncher une fonction au click
        btnDetails.addEventListener('click', () => detailsProduit(produit))

        /**********************************BOUTON MISE A JOUR***********************************/
            //On creer le bouton mettre a jour pour chaque carte
        const btnUpdate = document.createElement('button');
        //Ajout d'un id unique a chaque bouton
        btnUpdate.setAttribute('id', `btnUpdate${produit.id}`)
        //Le texte du bouton
        btnUpdate.innerHTML = 'METTRE A JOUR';
        //Ajout classe CSS Materialize
        btnUpdate.className = "col s4 waves-effect waves-light btn green lighten-3";
        //Ajout du bouton comme enfant de la div carte
        produitDIV.appendChild(btnUpdate);
        //Au click sur le bouton on declenche une fonction
        btnUpdate.addEventListener('click', () => editProduit(produit))

    }

    /********************************LES FONCTIONS********************************************/

    /*********************************FONCTION MISE A JOUR************************************/
    function editProduit(produit) {
        //Fomulaire ajouter produit HTML
        const ajouterForm = document.getElementById("ajouter-produit-form");
        //Animation = le formulaire ajouté disparait et est remplacé par le formulaire editer
        //Effet fade opacité passe de 1 a 0 en 0.5 seconde
        ajouterForm.animate([
            {opacity: 1},
            {opacity: 0}
        ], {
            duration: 500,
        });
        //Le formulaire ajouter sort du DOM (css display: none)
        setTimeout(() => {
            ajouterForm.style.display = "none"
        }, 500);

        //Le formulaire d'edition (on creer un formulaire + son id)
        const editForm = document.createElement('form');
        editForm.id = "edit-form";
        //Ajout html du formulaire edition + value = recup des valeurs de chaque produit
        editForm.innerHTML = `
             <h3 class="red-text">Editer un produit</h3>
              <div class="form-group">
                <label>Nom du produit</label>
                <input class="form-control" value="${produit.nomProduit}" type="text" name="nomProduit">
              </div>
        
              <div class="form-group">
                <label>Description du produit</label>
                <input class="form-control" value="${produit.descriptionProduit}" type="text" name="descriptionProduit">
              </div>
        
              <div class="form-group">
                <label>Prix du produit</label>
                <input class="form-control" value="${produit.prixProduit}" type="text" name="prixProduit">
              </div>
        
              <div class="form-group">
                <label>Image du produit</label>
                <input class="form-control" type="text" value="${produit.imageProduit}" name="imageProduit">
              </div>
        
              <div class="form-group">
                <input class="col s4 waves-effect waves-light btn blue lighten-2" value="Mettre à jour" type="submit">
                <input type="reset" value="vider les champs" class="col s4 waves-effect waves-light btn purple lighten-2">
              </div>
             `
        //Le formulaire d'edition est ajouter au conteneur parent (a la ligne: 11)
        updateForm.appendChild(editForm);
        //On declenche une fonction a la soumission du formulaire
        editForm.addEventListener('submit', (event) => updateProduit(event, produit))
    }

    //Traitement des nouvelles données
    function updateProduit(event, produit) {
        //Supprime le comportement par defaut
        event.preventDefault();
        //Recup des valeur du formulaire grace a la methode donnéeDesFormulaire ligne: 265
        let updatedProduit = donneeDesFormulaires();
        //Test de debug
        console.log(updatedProduit, produit.id);
        //Requète HTTP PUT + url/id
        fetch(`http://localhost:3000/produits/${produit.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduit)
        })
            //Prommesse + reponse de la requète au format json
            .then(response => response.json())
            .then(function () {
                //Debug + refresh de la page + afficher le produit modifier
                console.log('VOTRE PRODUIT A ETE MIS JOUR')
                window.location.reload()
                afficherProduit(produit)
            })

    }

    /*********************************FONCTION DETAIL PRODUIT************************************/

    function detailsProduit(produit) {
        //Chaque carte a un id unique id=""card-produit 1 2 3 4 etc..
        const cardProduit = document.querySelector(`#card-produit${produit.id}`);
        //Debug de test
        console.log(cardProduit)
        //Requète HTTP GET + /:id dynamique
        return fetch(`http://localhost:3000/produits/${produit.id}`, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            //Appel de la methode afficher les produits ci-dessous
            .then(produit => afficherDetailsProduit(produit))
    }

    /***********************************AFFICHER LES DETAILS DU PRODUIT***********************/

    function afficherDetailsProduit(produit) {
        //Conteneur de details du produit HTML
        const detailsContainer = document.querySelector("#detailsProduit");
        //Debug
        console.log(detailsContainer);
        //Animation aves le methode animate() js + css
        produits.animate([
            //Propriété css 1 = depart + 2 = arrivée de 0 a -300px
            {opacity: 1},
            {opacity: 0}
        ], {
            //Temps de la transition en 1 et 2 (de 0 a -300px en 0.5secondes)
            duration: 500,
        });
        //Au bout de 0.25 seconde le conteneur de carte pricipale disparait (apres la transition)
        setTimeout(() => {
            //Propriété css display: none
            produits.style.display = "none"
        }, 500)
        //Valeur des details du produits
        detailsContainer.innerHTML = `
                <div class="conatainer s12">
                    <h3 class="green-text lighten-2">DÉTAILS DU PRODUIT</h3>
                    <h4 class="orange-text lighten-2">${produit.nomProduit}</h4>
                    <p><img src="${produit.imageProduit}" width="25%" alt="${produit.nomProduit}" title="${produit.nomProduit}"></p>
                    <p>Description :</p>
                    <p>${produit.descriptionProduit}</p>
                    <p>Prix : ${produit.prixProduit} €</p>
                    <button class="col s4 waves-effect waves-light btn red lighten-3" onClick="window.location.reload();">Retour</button>
                </div>
            `
    }

    /**********************************FONCTION SUPPRIMER UN PRODUIT***********************************************************************/

    function deleteProduit(produit) {
        //recuperer id de chaque carte
        const cardProduit = document.querySelector(`#card-produit${produit.id}`)
        //Test de debug pour visualiser id de chaque carte
        console.log(cardProduit);
        //Requète HTTP fetch avec URL + id methode delete
        return fetch(`http://localhost:3000/produits/${produit.id}`, {
            method: 'DELETE'
        })
            //On recupère le json
            .then(response => response.json())
            //On supprimer toute la carte
            .then(() => {
                cardProduit.remove()
            })
    }

    /*********************************LES DONNEES DU FORMULAIRE**************************************/

    //Recupéré les données du formulaire
    //Recuperation des valeurs input name des champ du formulaire comme $_POST[''] en php
    function donneeDesFormulaires() {
        //Supprime le comportement par defaut
        /*
        La méthode  preventDefault() de l 'interface Event indique à l'agent utilisateur que si l'événement n'est pas traité explicitement,
        son action par défaut ne doit pas être prise en compte comme elle le serait normalement. L'événement continue à se
        propager comme d'habitude, sauf si l'un de ses écouteurs appelle stopPropagation() ou stopImmediatePropagation() , dont l'un ou l'autre termine la propagation.
         */

        return {
            nomProduit: `${event.currentTarget.nomProduit.value}`,
            descriptionProduit: `${event.target.descriptionProduit.value}`,
            prixProduit: `${event.target.prixProduit.value}`,
            imageProduit: `${event.target.imageProduit.value}`,
        }
    }

    /*********************************AJOUTER UN PRODUIT DEPUIS LE FORMULAIRE HTML******************************/

    //Fonction ajouter un produit
    function ajouterProduit(event) {
        event.preventDefault();
        //recup et stock  des valeurs des inputs name (value) du formulaire dans une variable
        let newProduit = donneeDesFormulaires(event);
        //Test de debug
        console.log(newProduit)
        //retouné une reqsuté de type post http
        return fetch('http://localhost:3000/produits', {
            method: 'POST',
            headers: {
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
            .catch(error => console.log(error))
    }


    //CREER LES BOUTONS
    function addBtnSupprimer(produit) {
        //AJOUTER un bouton supprimer
        const btnDelete = document.createElement("button");
        //Ajouter un id unique a chaque bouton => qui match avec chaque carte
        btnDelete.setAttribute("id", `btnDelete${produit.id}`);
        //Ajout de texte au bouton + nom du produit
        btnDelete.innerHTML = `Supprimer :  ${produit.nomProduit}`;
        //Ajout de classe css materialize
        btnDelete.className = "col s4 waves-effect waves-light btn orange";
        let produitDIV = document.getElementById(`card-produit${produit.id}`);
        //Ajout du bonton a chaque carte
        produitDIV.appendChild(btnDelete);
        //Au click sur le bouton on declenche une fonction avec un paramtre pour id
        btnDelete.addEventListener('click', () => deleteProduit(produit));
    }
})