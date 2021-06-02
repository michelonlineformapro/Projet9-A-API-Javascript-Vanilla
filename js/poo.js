//Un objet literal
let literalPersonne = {
    nom: ['MICHEL', 'Micahel'],
    age: 35,
    email: 'micpiwo@hotmail.fr',

    direBonjour(){
        let literalContainer = document.getElementById('literalPersonne')
        literalContainer.innerHTML = `
            Bonjour : ${this.nom[0]} ${this.nom[1]}
            <p>Tu as : ${this.age} ans</p>
            <p>Et ton email est : ${this.email}</p>
        `
    }
}

//Appel de notre objet :
literalPersonne.direBonjour();

//on peu mofier les propriété de l'objey
let changeAge = literalPersonne.age = 40;
console.log(changeAge);

//On peu creer une nouvelle fonction avec cet objet

let newFunction  = () => {
    let chanegContainer = document.getElementById('changePersonne')
    chanegContainer.innerHTML = `
            Bonjour : ${literalPersonne.nom[0]} ${literalPersonne.nom[1]}
            <p>Tu as : ${literalPersonne.age} ans</p>
            <p>Et ton email est : ${literalPersonne.email}</p>
            <p>OU BIEN ${literalPersonne['email']}</p>
        `
}

newFunction();


//Creer des objet a la chaine et dynamique ceci evite de creer 2 objet literaux
let objetDynamique = document.getElementById('objetDynamique');

function Users(nom, age, email){
    this.nom = nom;
    this.age = age;
    this.email = email;

    //Creation d'une fonction
    this.saluer = function(){
        objetDynamique.innerHTML +=
            `
                <p>Un objet dynamique = ${this.nom[0]} et le prenom ${this.nom[1]}</p>
                <p>Tu as : ${this.age} ans</p>
                <p>Et ton email est : ${this.email}</p> 
            `
    }

}


//Creation de variable et instance de objet
let utilisateur1 = new Users(['michael', 'michel'], 45, 'test@test.fr');

let utilisateur2 = new Users(['michael2', 'michel2'], 41, 'test@test.fr');

//Afficher les objets
utilisateur1.saluer();
//IMPOSIIBLE DE RAPELLER LA MEME METHODE
utilisateur2.saluer();

//Utiliser une classe pour reutiliser une methode

class Personnage{
    constructor(nom, age, email) {
        this.nom = nom;
        this.age = age;
        this.email = email
    }

    getPersonnage(){
        let objetClasse = document.getElementById('objetClasse')
        objetClasse.innerHTML +=
            `
                <p>Une classe nom = ${this.nom[0]} et le prenom ${this.nom[1]}</p>
                <p>Tu as : ${this.age} ans</p>
                <p>Et ton email est : ${this.email}</p> 
            `
    }
}

//Appel de objet classe avec reutilisation de la meme methode
let perso1 = new Personnage(['Laurent', 'TOUVABIEN'], 78, 'laurent@tes.com');
let perso2 = new Personnage(['Bob', 'LAGADECK'], 78, 'bob@tes.com');
let perso3 = new Personnage(['Annie', 'FAIDUVELO'], 78, 'annie@tes.com');

//On peu creer des objet et appeler le meme methode
perso1.getPersonnage();
perso2.getPersonnage();
perso3.getPersonnage()

//Heritage
class Chien extends Personnage{
    constructor(nom, age, email, race) {
        super(nom, age, email);
        this.race = race;
    }

    setRaceChien(){
        let heritageChien = document.getElementById('heritageChien')
        heritageChien.innerHTML +=
            `
                <p>Race du chien =  ${this.race}</p>
            `

    }
}

let perso4 = new Chien('Jojo', 78, 'chien@chien.com', 'Caniche');
perso4.setRaceChien()

