//Recup du btn pour ajouter une tache (recup par attrubut id="")

let btnAddTask = document.getElementById('btn-add-task');

//Le bouton declenche un evenement au click

btnAddTask.addEventListener('click', (event) => {
    //On supprime le coportement pad defaut
    event.preventDefault();

    //Input text des taches on recupère l'elemnt par id et sa valeur <input id="" value=""/>
    let inputTask = document.querySelector("#input-task").value;
    //Element parent <tbody> de html <table>
    //La méthode querySelector() de l'interface Document retourne le premier Element dans le document
    // correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.
    let tBody = document.querySelector('tbody');
    //Creer un tr (table row)
    let tr = document.createElement('tr');
    //Ajout d'une classe au <tr>
    tr.className = 'mt-3';
    //creer un table data <td>
    let td = document.createElement('td');

    //Ajouter un btn supprimer la taches
    let btnDelete = document.createElement('button');
    //Ajout d'une classe lib materialize
    btnDelete.className = 'right-align';
    //Ajout d'une croix dans le bouton avec createTextNode
    let btnDeleteText = document.createTextNode('\u00D7');
    //Ajout d'une classe materialize
    btnDelete.className = "btn-floating btn-large waves-effect waves-light red";
    //Ajout de la croix dans le bouton
    btnDelete.appendChild(btnDeleteText);

    //Verif que le champs n'est pas vide
    if(inputTask === ''){
        M.toast({html: 'Merci de remplir le champs taches'})
    }else{
        //Traitement ajout de la taches
        tBody.appendChild(tr)
        //Enfant de <tr>
        tr.appendChild(td)
        //Debug pour test
        console.log(inputTask);
        //Ajout du bouton supprimer
        td.innerHTML = inputTask;
        //A chaque ajour de la tache on ajoute un bouton
        td.append(btnDelete);
        //Au clcik sur le bouton supprimer on declenche du css (la ligne disparait)
        btnDelete.addEventListener('click' , () => {
            td.style.display = 'none';
        })
    }

    //On vide le champs input a chaque ajout
    document.getElementById('input-task').value = '';

})