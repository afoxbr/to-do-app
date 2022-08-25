import { createProject } from './dom';

class toDoCard {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

document.getElementsByClassName("newToDo").addEventListener("click", () => {
    
    let newTaskForm = document.createElement("form");
    newTaskForm.setAttribute("id", "newTaskForm");
    project.appendChild(newTaskForm);

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Title");
    newTaskForm.appendChild(titleInput);

    let descInput = document.createElement("input");
    descInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Brief description");
    newTaskForm.appendChild(descInput);

    let dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    newTaskForm.appendChild(dueDateInput);

    let priorityInput = document,createElement("input");
    priorityInput.setAttribute("type", "checkbox");
    newTaskForm.appendChild(priorityInput);
    //Add names and ids to these, add label to checkbox
});