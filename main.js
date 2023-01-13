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
function afficherPersonne() {
    let messages = [];

    for (let i = 0; i < annuaire.length; i++) {
        messages.push(i + " : " + annuaire[i].nom + " " + annuaire[i].prenom + ", " + annuaire[i].age + " ans");
    }
    
    prompt(messages.join("\n"));
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

function supprimerPersonne(index) {
    for (let i = 0; i < annuaire.length; i++) {

    }
};

