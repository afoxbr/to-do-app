import { projectArray } from './app';

function createProject(projectArray) {
    document.getElementById("content").innerHTML = '';
    if (projectArray.length > 0) {
        for (let i = 0; i < projectArray.length; i++) {
            let project = document.createElement("div");
            project.setAttribute("class", "project");
            document.getElementById("content").appendChild(project);
            
            let projectTitle = document.createElement("h2");
            projectTitle.innerHTML = projectArray[i].title;
            project.appendChild(projectTitle);
            
            let toDoCards = document.createElement("div");
            project.appendChild(toDoCards);

            if (projectArray[i].toDoArray.length > 0) {
                for (k = 0; k < projectArray[i].toDoArray.length; k++){
                    //write dom manipulation stuff for to do cards here
                };
            };

            let formSection = document.createElement("div");
            formSection.setAttribute("id", "formSection");
            project.appendChild(formSection);
            
            let toDoButton = document.createElement("button");
            toDoButton.setAttribute("class", "newToDo");
            toDoButton.innerHTML = "create task";
            project.appendChild(toDoButton);
        };
    };     
};

export { createProject };