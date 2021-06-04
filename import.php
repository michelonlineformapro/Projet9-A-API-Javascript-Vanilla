<!DOCTYPE html>
<html>
<head lang="fr">
    <meta charset="UTF-8">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="css/styles.css">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body>

<div class="card-panel">
    <h4 class="yellow-text">TEST IMPORT DE MODULE</h4>
    <p class="blue-text">Note : La plupart des navigateurs bloqueront les imports si vous exécutez ce code localement et sans passer par un serveur pour
        vous protéger de certaines failles.</p>

    <p class="blue-text"> Si vous voulez tester celui-ci, il vous faudra un serveur (un serveur local suffit).
        Pour installer une architecture serveur sur votre machine, vous devrez télécharger WAMP (Windows) ou MAMP (Mac).</p>

    <h5 class="green-text">1 - Exporter des fonctions dans un fichier js</h5>
    <img src="img/export.jpg" alt="" title="">

    <h5 class="red-text">2 - Importer les fonctions précédement crée dans un autre fichier Js</h5>
    <img src="img/import.jpg" alt="" title="">

    <h5 class="orange-text">3 - Enfin dans la balise script de votre html/php ajouter : type="module" src="js/import.js" async</h5>
    <img src="img/src.jpg" alt="" title="">

</div>
</body>
<script type="module" src="js/import.js" async></script>
</html>
