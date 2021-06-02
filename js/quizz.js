//Variables et constantes globales
const quizzContainer = document.getElementById('quizz-container');
const resultatContainer = document.getElementById('resultat');
const valider = document.getElementById('valider')


//Les question dans un tableau

//Les questions => tableau d'objet

const toutesLesQuestions = [
    {
        question: 'Quelle est la couleur du logo javascript ?',
        //Tableau des reponses
        reponses: {
            A: 'Jaune',
            B: 'Vert',
            C: 'Rouge',
            D: 'Bleu'
        },
        bonneReponse: 'A'
    },
    {
        question: 'Quelle methode permet de lister des données Json en Javascript ?',
        //Tableau des reponses
        reponses: {
            A: 'add()',
            B: 'fetch()',
            C: 'request()',
            D: 'display()'
        },
        bonneReponse: 'B'
    },
    {
        question: 'Quelle langage web est concerné par l\'extension de fichier .js ?',
        //Tableau des reponses
        reponses: {
            A: 'PHP',
            B: 'Java EE',
            C: 'Javascript',
            D: 'Python'
        },
        bonneReponse: 'C'
    },
    {
        question: 'Quelle technologie permet de faire des requète asyncrone en JavaScript ?',
        //Tableau des reponses
        reponses: {
            A: 'Webpack',
            B: 'Babel',
            C: 'Composer',
            D: 'AJAX'
        },
        bonneReponse: 'D'
    }
]

function construireQuizz(){
    //Init du tableau vide de question
    const questionVide = [];

    //Boucle de parcour des question
    toutesLesQuestions.forEach((questionCourante, questionIndex) => {

        //Debug pour tester la lecture du tableau avec forEach(valeur, cle)
        console.log('Lister les question : ' + questionCourante.question);
        console.log('Lister les index du tableau de question : ' + questionIndex);


        //Init un tableau vide des reponses
        const reponsesArray = [];
        //Boucle de lecture des reponses
        for(lettre in questionCourante.reponses){
            //.push() ajoute un element a la fin du tableau
            //lettre recupère la clé de notre tableau de reponses => on joute l'index des questions dynamiquement a id et name
            reponsesArray.push(
                `
                    <label>
                    <!--Creation des bouton input radio + id et name dynamique-->
                    <input id="radio${questionIndex}" type="radio" name="reponse${questionIndex}" value="${lettre}" />
                    <span class="letter-reponse">${lettre}</span>
                     <!--Affiche la valeur de chaque cle lettre-->
                    <span id="lesReponses${questionIndex}" class="reponses">${questionCourante.reponses[lettre]}</span>
                    <br />
                    </label>
                `
            )}

        //On rempli le tableau des questions avec .push() (ajoute un element ala fin du tableau)
        questionVide.push(
            `
             <div class="card-panel">
              <!--Affiche les questions-->
                    ${questionCourante.question}
             </div>
                
             <div class="les-reponses card-panel">
                <!--
                La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant
                 tous les éléments d'un tableau (ou d'un objet semblable à un tableau).
                La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
                -->
                 <!--Affiche les reponses et supprime la , entre chaque element-->
                ${reponsesArray.join('')}
             </div>
            `
        )
    });

    quizzContainer.innerHTML = questionVide.join('');

}

//Au click sur le bouton valider

function voirResultat(){

    //Creation et recup du conteneur creer dans la fonction creationQuizz (La div au dessus)
    const reponseConteneur = quizzContainer.querySelectorAll('.les-reponses');
    //Init du score a 0
    let score = 0;

    //De nouveau une boucler sur les questions
    toutesLesQuestions.forEach(function(questionCourante, questionIndex){
        //Recuperer index des reponses
        const lesReponses = reponseConteneur[questionIndex];

        console.log('TEST : ' + lesReponses)
        //La reponse cochée (input type radio) element input + type radio : 
        const reponseCochee = `input[name=reponse${questionIndex}]:checked`;

        console.log('ICI la reponse cochée = ' + reponseCochee);

        //Stocké la reponse cochée sinon tableau vide
        const reponseJoueur = (lesReponses.querySelector(reponseCochee) || {}).value

        //Condition de la reponse = si la bonne reponse est cochée
        if(reponseJoueur === questionCourante.bonneReponse){
            //On monte le score de 1 (score += 1) score = score + 1)
            score++;
            reponseConteneur[questionIndex].className = "green-text"
        }else{

            reponseConteneur[questionIndex].className = "red-text"
        }

    });

    //Afficher le score
    resultatContainer.innerHTML =
        `
        <h1>Votre score : ${score} / ${toutesLesQuestions.length}</h1>
       
        `
    console.log(score)
}
//Lancer le fonction de construction du questionnaire au refresh de la page
construireQuizz()
//Au click sur le bouton valider -> on lance la fonction voirResultat()
valider.addEventListener('click', voirResultat)
