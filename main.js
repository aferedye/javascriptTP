let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
];

// Réalisez un programme qui, à partir du tableau ci-dessus, permet :
// d'afficher les personnechaque personne possède un nom, prénom et son age.
// d'ajouter une personne dans le tableau.
// de supprimer une personne.


// Permet d'afficher la liste des contact 
// Crée un tableau qui contient les objet du tableau annuaire et permet de l'afficher dans un prompt sous forme de liste 
function afficherPersonne(instruction) {
    let messages = [];

    for (let i = 0; i < annuaire.length; i++) {
        messages.push(i + " : " + annuaire[i].nom + " " + annuaire[i].prenom + ", " + annuaire[i].age + " ans");
    }
    prompt(messages.join("\n"), instruction);
}

// Crée un objet qui permet de push un nouveau contact dans le tableau annuaire 
function ajouterPersonne(nom, prenom, age) {
    let nouvellePersonne = {
        nom: nom,
        prenom: prenom,
        age: age
    };

    annuaire.push(nouvellePersonne);
}


// Permet de supprimer un utilisateur de la liste de contact.
function supprimerPersonne(index) {
    for (let i = 0; i < annuaire.length; i++) {
        if (i == index) {
            annuaire.splice(i, 1);
            return;
        }
    }
};


// Fonction permettant de naviguer entre les différentes fonctions
function menuPrincipal() {

    let choix;

    while (choix !== "4") {
        choix = prompt("Menu principal :\n1. Afficher annuaire\n2. Ajouter une personne\n3. Supprimer une personne\n4. Quitter");
        switch (choix) {

            case "1":
                afficherPersonne("Appuyer sur ok ou entrée pour revenir au menu précédent");
                break;

            case "2":
                let nom = prompt("Entrez le nom de la personne à ajouter :");
                let prenom = prompt("Entrez le prénom de la personne à ajouter :");
                let age = prompt("Entrez l'age de la personne à ajouter :");
                ajouterPersonne(nom, prenom, age);
                break;

            case "3":
                afficherPersonne("Appuyer sur ok ou entrée pour passer au menu de suppression");
                let index = prompt("Entrez l'index de la personne à supprimer :");
                supprimerPersonne(index);
                break;

            case "4":
                alert("Au revoir!");
                break;
        }
    }
}

menuPrincipal();