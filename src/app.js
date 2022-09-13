import { createProject } from './dom';

const appObject = {
    projectArray: [],
    projectControl: () => {

        let newProjectButton = document.createElement("button");
        newProjectButton.innerHTML = "new project";
        newProjectButton.setAttribute("id", "newProjectButton");
        document.getElementById("projectButton").appendChild(newProjectButton);

        let formDiv = document.createElement("div");
        formDiv.setAttribute("id", "formDiv");
        document.getElementById("projectButton").appendChild(formDiv);

        newProjectButton.addEventListener("click", () => {
            
            let newProjectForm = document.createElement("form");
            newProjectForm.setAttribute("id", "newProjectForm");
            formDiv.appendChild(newProjectForm);

            let projectNameInput = document.createElement("input");
            projectNameInput.setAttribute("type", "text");
            projectNameInput.setAttribute("name", "projectTitle");
            projectNameInput.setAttribute("id", "projectNameInput");
            projectNameInput.setAttribute("placeholder", "Project Title");
            newProjectForm.appendChild(projectNameInput);

            let newProjectSubmit = document.createElement("button");
            newProjectSubmit.innerHTML = "Submit";
            newProjectForm.appendChild(newProjectSubmit);
            
            newProjectSubmit.addEventListener("click", () => {

                class project {
                    constructor(title, toDoArray) {
                        this.title = title;
                        this.toDoArray = toDoArray;
                    };
                };

                let submittedProject = new project()
                submittedProject.title = document.getElementById("projectNameInput").value;
                submittedProject.toDoArray = [];
                
                appObject.projectArray.push(submittedProject);

                formDiv.innerHTML = '';

                createProject();
            });
        });
    },


    newToDoButton: (buttonArg, i) => { 
        
        class toDoCard {
            constructor(title, description, dueDate, priority, checklist) {
                this.title = title;
                this.description = description;
                this.dueDate = dueDate;
                this.priority = priority;
            };
        };
        
        buttonArg.addEventListener("click", () => {
            
    
            let newTaskForm = document.createElement("form");
            newTaskForm.setAttribute("id", "newTaskForm");
            document.getElementById("content").appendChild(newTaskForm);

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
            descInput.setAttribute("placeholder", "Brief description");
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
            priorityLabel.innerHTML = "Tick for high priority";
            prioritySection.appendChild(priorityLabel);

            let priorityInput = document.createElement("input");
            priorityInput.setAttribute("type", "checkbox");
            priorityInput.setAttribute("name", "priorityCheck");
            priorityInput.setAttribute("id", "toDoPriority");
            prioritySection.appendChild(priorityInput);

            let submitNewTask = document.createElement("button");
            submitNewTask.innerHTML = "Submit";
            newTaskForm.appendChild(submitNewTask);
            submitNewTask.addEventListener("click", () => {
                let submittedToDoCard = new toDoCard()
                submittedToDoCard.title = document.getElementById("toDoTitle").value;
                submittedToDoCard.description = document.getElementById("toDoDesc").value;
                submittedToDoCard.dueDate = document.getElementById("toDoDate").value;
                submittedToDoCard.priority = document.getElementById("toDoPriority").checked;

                appObject.projectArray[i].toDoArray.push(submittedToDoCard);
                createProject();
            });
    })},
};

export { appObject };