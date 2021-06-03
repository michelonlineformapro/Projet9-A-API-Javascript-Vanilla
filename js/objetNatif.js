//Une valeur privitive de type string

let chaine1 = 'une valeur primitive ?';

//On transforme la chaine1 en Objet
let chaine2 = new String('une valeur primitive ?')

console.log('chaine1 est de type ' + typeof(chaine1) + ' et chaine2 est de type : ' + typeof(chaine2))

chaine2.prototype