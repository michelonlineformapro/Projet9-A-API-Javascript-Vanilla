

window.onload = function (){
    document.querySelector('#password').addEventListener('input', motDePasse);
}



function motDePasse(){

    //Le score
    let score = 0;
    //La saisie
    let motPasse = document.querySelector('#password').value
    //Les elements
    let minuscule = document.querySelector('#minuscule');
    let majuscule = document.querySelector('#majuscule');
    let chiffre = document.querySelector('#chiffre');
    let special = document.querySelector('#special');
    let longueur = document.querySelector('#longeur')
    console.log(motPasse)
    //check miniscule
    //Les regex true ou false soit string soit new Regex()
    if(/[a-z]/.test(motPasse)){
        console.log('minuscule = good');
        score++
        minuscule.classList.replace('rouge', 'vert');
    }else{
        console.log('minuscule = no good')
        minuscule.classList.replace('vert', 'rouge');
    }


    //Majsucule

    if(/[A-Z]/.test(motPasse)){
        console.log('majuscule = good');
        score++
        majuscule.classList.replace('rouge', 'vert');
    }else{
        console.log('majuscule = no good')
        majuscule.classList.replace('vert', 'rouge');
    }

    //Chiffre
    if(/[0-9]/.test(motPasse)){
        score++
        chiffre.classList.replace('rouge', 'vert');
    }else{

        chiffre.classList.replace('vert', 'rouge');
    }
    //Caractéres speciaux = ici pas \ car ca echape les caratères
    if(/[$!@/&%#ç]/.test(motPasse)){
        console.log('special = good');
        score++
        special.classList.replace('rouge', 'vert');
    }else{
        console.log('special = no good')
        special.classList.replace('vert', 'rouge');
    }
    //le 6 lettres
    if(motPasse.length >= 6){
        score++
        longueur.classList.replace('rouge', 'vert');
    }else{

        longueur.classList.replace('vert', 'rouge');
    }

    let validBtn = document.getElementById('btn-valid-form')

    if(score === 5){
        validBtn.style.display = 'block';
    }else{
        validBtn.style.display = 'none';
    }


}
motDePasse()
let validBtn = document.getElementById('btn-valid-form')
validBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    alert('TOUS LES CARACTERES SONT VALIDE')
})