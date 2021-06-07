const promesse = new Promise((resolve, reject) => {

})



//Fonction de chargement d'un script
function loadScript(src){
    return new Promise((resolve, reject) => {
        //On creer element script
        let script = document.createElement('script');
        //Ajouter attribut source
        script.src = src;
        //ajout de la balise dans le body
        document.body.append(script);

        //Si la prommesse est tenue
        script.onload = () =>resolve('Fichier ' + src + ' à bien été chargé');
        //Sinon rejet de la promesse
        script.onload = () => reject(new Error('Echec du chragement du ' + src))
    })
}

const promesse1 = loadScript('js/test.js');
console.log(promesse1)
const promesse2 = promesse1.then(result => alert(result), error => alert(error))
console.log(promesse2);

//Ajout de async et await
async function test(){
    const const1 = await loadScript('js/api.js')
    alert(const1)
}

test()
