import { projectControl } from './app';

function createProject() {
    for (i = 0; i < projectArray.length; i++) {
        let project = document.createElement("div");
        project.setAttribute("class", "project");
        document.getElementById("content").appendChild(project);
        
        let projectTitle = document.createElement("h2");
        projectTitle.innerHTML = projectArrauy[i].title;
        project.appendChild(projectTitle);
        
        let toDoCards = document.createElement("div");
        project.appendChild(toDoCards);

        if (projectArray[i].toDoArray.length > 0) {
            for (i = 0; i < projectArray[i].toDoArray.length; i ++){
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

export { createProject };