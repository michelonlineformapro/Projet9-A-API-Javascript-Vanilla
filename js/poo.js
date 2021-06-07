//Un objet literal = un objet avec des valeurs a l'interieur de ce dernier
let literalPersonne = {
    //Clé / Valeur
    nom: ['MICHEL', 'Michael'],
    age: 35,
    email: 'micpiwo@hotmail.fr',

    //Fonction dans un objet
    direBonjour(){
        let literalContainer = document.getElementById('literalPersonne')
        literalContainer.innerHTML = `
            Bonjour : ${this.nom[0]} ${this.nom[1]}
            <p>Tu as : ${this.age} ans</p>
            <p>Et ton email est : ${this.email}</p>
        `
    }
}

//Appel de notre objet et de sa fonction :
literalPersonne.direBonjour();

//on peu modifier les propriétées de l'objet = ici l'age
let changeAge = literalPersonne.age = 40;
//Test de debug
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

//Appel de la nouvelle fonction
newFunction();


//Creer des objets a la chaine et dynamique -> ceci evite de creer 2 objet literaux
let objetDynamique = document.getElementById('objetDynamique');

//La fonction prend des paramètres c une fonction constructeur
function Users(nom, age, email){
    this.nom = nom;
    this.age = age;
    this.email = email;

    //Creation d'une fonction dans une fonction

    this.saluer = function(){
        objetDynamique.innerHTML +=
            `
                <p>Un objet dynamique = ${this.nom[0]} et le prenom ${this.nom[1]}</p>
                <p>Tu as : ${this.age} ans</p>
                <p>Et ton email est : ${this.email}</p> 
            `
    }

}


//Creation de variable et instance de objet + valeur
let utilisateur1 = new Users(['michael', 'michel'], 45, 'test@test.fr');

let utilisateur2 = new Users(['michael2', 'michel2'], 41, 'test@test.fr');

//Afficher les objets = appel de la variable + la fonction de la classe
utilisateur1.saluer();
//IMPOSIIBLE DE RAPELLER LA MEME METHODE
utilisateur2.saluer();

//Utiliser une classe et reutiliser une methode

class Personnage{
    //Creation d'un constructor
    constructor(nom, age, email) {
        this.nom = nom;
        this.age = age;
        this.email = email
    }
    //Creation de la fonction pour afficher des personnages
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



//Creation de variable = instance de notre classe
let perso1 = new Personnage(['Laurent', 'TOUVABIEN'], 78, 'laurent@tes.com');
let perso2 = new Personnage(['Bob', 'LAGADECK'], 78, 'bob@tes.com');
let perso3 = new Personnage(['Annie', 'FAIDUVELO'], 78, 'annie@tes.com');

//A partir de la classe intancié on appel la methode de la classe
perso1.getPersonnage();
perso2.getPersonnage();
perso3.getPersonnage()

//Heritage = ici la classe chien herite de la classe Personnage
class Chien extends Personnage{
    //Creation d'un constructor avec repiser des paramètres du constructeur parent + ajout d'un paramètre
    constructor(nom, age, email, race) {
        //Recuperation du constructor parent avec super()
        super(nom, age, email);
        this.race = race;
    }
    //Creation d'une methode pour afficher le chien au personnage
    setRaceChien(){
        let heritageChien = document.getElementById('heritageChien')
        heritageChien.innerHTML +=
            `
                <p>Une classe nom = ${this.nom[0]} et le prenom ${this.nom[1]}</p>
                <p>Tu as : ${this.age} ans</p>
                <p>Et ton email est : ${this.email}</p> 
                <p>Race du chien =  ${this.race}</p>
            `

    }
}

//Variable + insatnce de la classe chien qui herite de Personnage

let perso4 = new Chien('Jojo', 78, 'chien@chien.com', 'Caniche');
//Appel de la methode de la classe chien
perso4.setRaceChien()

