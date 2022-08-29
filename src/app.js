import { createProject } from './dom';

class toDoCard {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

function newToDoButton() { 
    document.getElementsByClassName("newToDo").addEventListener("click", () => {
    
        let newTaskForm = document.createElement("form");
        newTaskForm.setAttribute("id", "newTaskForm");
        project.appendChild(newTaskForm);

        let titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "toDoTitle");
        titleInput.setAttribute("id", "toDoTitle");
        titleInput.setAttribute("placeholder", "Title");
        newTaskForm.appendChild(titleInput);

        let descInput = document.createElement("input");
        descInput.setAttribute("type", "text");
        descInput.setAttribute("name", "toDoDesc");
        descInput.setAttribute("id", "toDoDesc");
        titleInput.setAttribute("placeholder", "Brief description");
        newTaskForm.appendChild(descInput);

        let dueDateInput = document.createElement("input");
        dueDateInput.setAttribute("type", "date");
        dueDateInput.setAttribute("name", "toDoDate");
        dueDateInput.setAttribute("id", "toDoDate");
        newTaskForm.appendChild(dueDateInput);

        let prioritySection = document.createElement("div");
        newTaskForm.appendChild(prioritySection);

        let priorityLabel = document.createElement("label");
        priorityLabel.setAttribute("for", "prioritycheck");

        let priorityInput = document.createElement("input");
        priorityInput.setAttribute("type", "checkbox");
        priorityInput.setAttribute("name", "priorityCheck");
        prioritySection.appendChild(priorityInput);
})};

export { newToDoButton };