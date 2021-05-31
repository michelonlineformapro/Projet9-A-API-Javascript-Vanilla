//Recup du btn

let btnAddTask = document.getElementById('btn-add-task');

//Le bouton declenche un evenement

btnAddTask.addEventListener('click', (event) => {
    //On supprime le coportement pad defaut
    //event.preventDefault();

    //Inout text des taches
    let inputTask = document.querySelector("#input-task").value;
    //Element parent
    let tBody = document.querySelector('tbody');
    //Creer un tr
    let tr = document.createElement('tr');
    tr.className = 'mt-3';
    //creer un table data
    let td = document.createElement('td');

    //Ajouter un btn supprimer
    let btnDelete = document.createElement('button');
    //Ajout d'une classe bootstrap
    btnDelete.className = 'float-end btn btn-danger';
    let btnDeleteText = document.createTextNode('\u00D7');
    //Ajout du classe pour marerilize
    btnDelete.className = "btn-floating btn-large waves-effect waves-light red";
    //Ajout de la croix dans le bouton
    btnDelete.appendChild(btnDeleteText);

    //Verif que le champs n'est pas vide
    if(inputTask === ''){
        M.toast({html: 'Merci de remplir le champs taches'})
    }else{
        //Traitement ajout de la taches
        tBody.appendChild(tr)
        //Enfant de tr
        tr.appendChild(td)
        console.log(inputTask);
        //Ajout du bouton supprimer
        td.innerHTML = inputTask;
        td.append(btnDelete);
        btnDelete.addEventListener('click' , () => {
            td.style.display = 'none';
        })
    }

    //Recuper la valeur de l'input
    document.getElementById('input-task').value = '';

})