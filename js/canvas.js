//SOURCE = https://jsfiddle.net/rtoal/wvp4scLL/

//Objet init du canvas
let canvas = {
    //Recup de id de la div = HTML
    element: document.getElementById('canvas'),

    //Largeur et hauteur du canvas
    width: 1024,
    height: 768,

    //Fonction pour demarer les element au refresh de la page
    //C'est element peuvent etre creer dans la balise canvas <canvas width="" height=""></canvas>

    //ATTENTION ICI la syntaxe ()=> {} retourne une erreur


    creationElement: function (){
        //Ajout des px a 1024 et 768 au css
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        //Ajout d'un element enfant (manipulation du DOM) a la div canvas

        https://developer.mozilla.org/fr/docs/Web/API/Document/body

            document.body.appendChild(this.element)
    }
}

//Objet balle

let Balle = {
    //Propriété balle = fonction + paramètres
    creationBalle: function (couleur, directionX, directionY){
        //Transforme une variable en objet Object.variable = new Object = Instance de la classe Object
        //La méthode Object.create() crée un nouvel objet avec un prototype donné et des propriétés données.
        let newBalle = Object.create(this);
        //Init des objets on assigne objet newBalle au valeur des paramètres
        newBalle.couleur = couleur;
        //Vistesse et direction sur les abcissed
        newBalle.directionX = directionX;
        //Vitesse et direction sur les ordonnées
        newBalle.directionY = directionY;
        //Largeur et hauteur des balles (carre + css)
        /*
        DANS STYLES.css
        background-color: black;
        position: absolute;
        display: inline-block;
        border-radius: 50%;
         */
        newBalle.width = 20;
        newBalle.height = 20;
        //Creer une div en position absolue pour chaque balle
        newBalle.element = document.createElement('div');
        //Ajout d'une couleur a chaque balle
        newBalle.element.style.backgroundColor = couleur;
        //Ajout de px au css de chaque balle
        newBalle.element.style.width = newBalle.width + 'px';
        newBalle.element.style.height = newBalle.height + 'px';

        //Ajout de la classe a la div creer
        newBalle.element.className += 'ball' // <div class="ball"></div>
        /*
        La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
         */
        newBalle.width = parseInt(newBalle.element.style.width);
        newBalle.height = parseInt(newBalle.element.style.height);
        //Ajout de la div balle au canvas parent
        canvas.element.appendChild(newBalle.element)
        return newBalle;
    },
    deplacement: function (dirX, dirY){
        //recup du canvas + ajout des propriété left css sur un element a la position absolute en px
        this.element.style.left = dirX + 'px';
        //Idem pour la hauteur
        this.element.style.top = dirY + 'px';
    },
    changeDeDirectionSiBesoin: function (posX, posY){
        //si la direction est < 0 ou a la largeur du canvas - la largeur de la balle
        if(posX < 0 || posX > canvas.width - this.width){
            this.directionX = -this.directionX
        }
        //Pour la position en ordonnée
        if(posY < 0 || posY > canvas.height - this.height){
            this.directionY = -this.directionY
        }
    },
    dessinerBalle: function (posX, posY){
        this.deplacement(posX, posY);
        let ball = this;
        //Creation d'un delay
        setTimeout(function (){
            ball.changeDeDirectionSiBesoin(posX, posY);
            ball.dessinerBalle(posX + ball.directionX, posY + ball.directionY);
        }, 1000 / 60);
    },
    obstacle: function (){

    }
};

//Appel de la fonction pour dessiner le canvas
canvas.creationElement();

//Instance de l'objet Balle et appel de la methode creationBalle avec ses paramètres
let ball1 =  Balle.creationBalle("#874589", 4, 3);
let ball2 =  Balle.creationBalle("#124589", 1, 5);
let ball3 =  Balle.creationBalle("#451256", 2, 2);
let ball4 =  Balle.creationBalle("#965236", 2, 3);
let ball5 =  Balle.creationBalle("#235689", 6, 1);
let ball6 =  Balle.creationBalle("#451203", 10, 5);

//TEST
let ball7 = Balle.creationBalle('red', 3,7)

//Desinner les balles
ball1.dessinerBalle(70, 0)
ball2.dessinerBalle(20, 200);
ball3.dessinerBalle(300, 330);
ball4.dessinerBalle(50, 10);
ball5.dessinerBalle(30, 150);
ball6.dessinerBalle(250, 120);

//Balle de test
ball7.dessinerBalle(10,10);

window.addEventListener("resize", function(){
    canvas.outerHeight = window.innerHeight - canvas.offsetTop - Math.abs(canvas.outerHeight - canvas.outerHeight);
    canvas.outerWidth = window.innerWidth - canvas.offsetLeft - Math.abs(canvas.outerWidth - canvas.outerWidth);
    console.log('ok resize')

});



