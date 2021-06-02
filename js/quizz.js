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
        console.log('Lister les question : ' + questionCourante.question);
        console.log('Lister les index du tableau de question : ' + questionIndex);


        //Init un tableau des reponse
        const reponsesArray = [];
        //Boucle de lecture des reponses
        for(lettre in questionCourante.reponses){
            reponsesArray.push(
                `
                    <label>
                    <input id="radio${questionIndex}" type="radio" name="reponse${questionIndex}" value="${lettre}" />
                    <span class="letter-reponse">${lettre}</span>
                    <span class="reponses">${questionCourante.reponses[lettre]}</span>
                    <br />
                    </label>
                `
            )}

        //On rempli le tbleau des question
        questionVide.push(
            `
             <div class="card-panel">
                    ${questionCourante.question}
             </div>
                
             <div class="les-reponses card-panel">
                <!--
                La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant
                 tous les éléments d'un tableau (ou d'un objet semblable à un tableau).
                La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
                -->
                ${reponsesArray.join('')}
             </div>
            `
        )
    });

    quizzContainer.innerHTML = questionVide.join('');

}

function voirResultat(){

    const reponseConteneur = quizzContainer.querySelectorAll('.les-reponses');
    let score = 0;

    //De nouveau une bocule sur les questions
    toutesLesQuestions.forEach(function(questionCourante, questionIndex){
        const lesReponses = reponseConteneur[questionIndex];

        console.log('TEST : ' + lesReponses)
        //La reponse cochée
        const reponseCochee = `input[name=reponse${questionIndex}]:checked`;

        console.log('ICI la reponse cochée = ' + reponseCochee);

        //Stocké la reponse cochée
        const reponseJoueur = (lesReponses.querySelector(reponseCochee) || {}).value

        //Condition de la reponse
        if(reponseJoueur === questionCourante.bonneReponse){
            //On monte les score
            score++;
            reponseConteneur[questionIndex].style.color = "green"
        }else{
            reponseConteneur[questionIndex].style.color = "red"
        }

    });

    //Afficher le score
    resultatContainer.innerHTML =
        `
        <h1>Votre score : ${score} / ${toutesLesQuestions.length}</h1>
       
        `
    console.log(score)
}
construireQuizz()
valider.addEventListener('click', voirResultat)
