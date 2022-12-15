"use strict"

// Récupérer les éléments HTML qui nous intéressent
const toDoList = document.getElementById('to-do-list');
const newTaskField = document.getElementById('new-task-field');
const addTaskButton = document.getElementById('add-task-button');

// Ajouter une fonction pour ajouter une tâche à la liste
function addTask() {
    // Récupérer le texte de la nouvelle tâche
    const taskText = newTaskField.value;
    

    // Vérifier si le champ de texte n'est pas vide
    if (taskText === '') {
    return;
    }

    // Créer un nouvel élément <li> avec le texte de la tâche
    const newTask = document.createElement('li');
    newTask.innerHTML = taskText;

    // Ajouter la tâche à la liste
    toDoList.appendChild(newTask);

    // Vider le champ de texte
    newTaskField.value = '';
    }


// Ajouter un gestionnaire d'événement pour exécuter la fonction
// `addTask` lorsque le bouton est cliqué
addTaskButton.addEventListener('click', addTask)
