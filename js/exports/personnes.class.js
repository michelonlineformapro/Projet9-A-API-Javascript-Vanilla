export function Personnages(nom, email, age, sexe){
    this.nom = nom;
    this.email = email;
    this.age = age;
    this.sexe = sexe;

    this.creerPersonnage = () => {
        let personnageContainer = document.createElement('div');

        personnageContainer.innerHTML =
            `
            <ul class="collection">
                <li class="collection-item">Nom: ${this.nom}</li>
                <li class="collection-item">Email: ${this.email}</li>
                <li class="collection-item">Age: ${this.age}</li>
                <li class="collection-item">Sexe: ${this.sexe}</li>
            </ul>
            `
        document.body.append(personnageContainer)
    }
}