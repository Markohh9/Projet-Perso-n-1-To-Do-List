"use strict";


//récupération de nos id du html
const task = document.getElementById("new-task-field");
const buttonAdd = document.getElementById("addtaskbutton");
const ul = document.getElementById("to_do_list");
const notask = document.getElementById("notask");



// code de notre fonction pour notre liste
form.onsubmit = (event) =>{

    //création de notre constante en créeant des li dans le HTML
    const li = document.createElement("li");

    // création de notre span après la chaine de carac des taches pour les suppr
    const spanDel = document.createElement("span");
    spanDel.classList.add("delete");

    // au click de la span, ajout d'un event effectuant la fonction pour suppr la LI
    spanDel.onclick = () => del(li);
    // ajout de la croix permettant la suppression de chaque taches
    spanDel.textContent = " X";

    // ajout et conversion de notre valeur de champs en li dans notre HTML
    li.innerHTML = task.value;

    // déclaration en tant qu'enfant pour notre span "li est parent"
    li.appendChild(spanDel);

    // déclaration en tant qu'enfant pour nos li "ul est parent"
    ul.appendChild(li);
    // retour a 0 de notre champs une fois notre tache ajoutée
    task.value = "";
    //empêchement de l'actualisation du naviguateur avec le boutton submit par défaut
    event.preventDefault();

// Affichage du text quand notre liste est vide
    notask.style.display = "none";

    //enregistrement dans le localStorage pour le nav
    localStorage.setItem("task",ul.innerHTML);
}



// création de notre fonction pour pouvoir supprimer les taches effectués
function del (element) {
    element.remove();
    
    // fonction pour réaficher notre texte comme quoi aucune tache n'y est trouvé
    // si ol est = a 0 
    if (ul.innerHTML == "") {
        noTask.style.display = "flex";
    }

    localStorage.setItem("task",ul.innerHTML);
}


// option pour récupérer nos taches après actualisation directement depuis le localStorage
ul.innerHTML = localStorage.getItem("task");


//récupération de notre classe depuis le HTML
const spanDels = document.querySelectorAll(".delete");
//création de notre boucle pour pouvoir suppr meme après actualisation
for(let span of spanDels)
{   //on va chercher ici le parent de span car le li ne sera pas retrouvé après actualisation de la page
    span.onclick = () => del(span.parentElement);
}


// savoir pourquoi quand je n'ai plus de tache, mon Aucune tâche repérée ! ne se 
// réafiche pas + 
// pq quand j'actualise, la dernière tache même supprimé se réaffiche
