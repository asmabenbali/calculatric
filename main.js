


// Sélectionner tous les boutons de la calculatrice:

const boutons = document.querySelectorAll('.buttons button');

// Sélectionner l'affichage de la calculatrice:

const affichage = document.querySelector('.display');

// Déclarer une variable pour stocker la valeur courante de l'affichage :

let valeurCourante = '';


// Ajouter un écouteur d'événements pour le clic à chaque bouton de la calculatrice
boutons.forEach(function(bouton) { /*est utilisée pour exécuter une fonction donnée une fois pour chaque élément d'un tableau*/
    bouton.addEventListener('click', function() {
        // Récupérer le texte du bouton cliqué
        const valeurBouton = bouton.textContent;

        // Traiter les différents cas en fonction de la valeur du bouton
        switch (valeurBouton) {
            case 'AC':
                valeurCourante = '';
                break;
            case 'DEL':
                valeurCourante = valeurCourante.slice(0, -1);
                break;
            case '=':
                valeurCourante = eval(valeurCourante);
                break;
            default:
                valeurCourante += valeurBouton;
                break;
        }

        // Mettre à jour la valeur de l'affichage
        affichage.value = valeurCourante;
    });
});
