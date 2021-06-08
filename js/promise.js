const promesse = new Promise((resolve, reject) => {
    //Tache asyncrone a realisé
    //Soit resolve + soit reject
    //Le promesse sont en genearl deja fournie par API
})

//Fonction de chatgement du script avec un paramètre = nom du fichier
function loadScript(src){
    //retourne une promesse soit OK ou ECHEC
    return new Promise((resolve, reject) => {
        //On creer element script
        let script = document.createElement('script');
        //Ajout de attribut src
        script.src = src;
        //On ajoute a la balise head
        document.body.append(script);
        //si ca marche
        script.onload = () => resolve('Fichier ' + src + ' à bien été chargé');
        //Sinon erreur
        script.onerror = () => reject(new Error('Echec de chargement de ' + src));
    })
}

const promess1 = loadScript('js/api.js')
console.log(promess1)
const promesse2 = promess1.then(result => alert(result), error => alert(error))

//Ajout async et await
async function test(){
    //Ici test n'existe pas
    const cont1 = await loadScript('js/test.js');
    //const cont1 = await loadScript('js/block.js');
    alert(cont1)
}
test()