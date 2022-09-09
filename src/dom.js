import { appObject } from './app';

function createProject() {
    document.getElementById("content").innerHTML = '';

    let projectArray = appObject.projectArray

    if (projectArray.length > 0) {
        for (let i = 0; i < projectArray.length; i++) {
            let project = document.createElement("div");
            project.setAttribute("class", "project");
            document.getElementById("content").appendChild(project);
            
            let projectTitle = document.createElement("h2");
            projectTitle.innerHTML = projectArray[i].title;
            project.appendChild(projectTitle);
            
            let toDoCards = document.createElement("div");
            toDoCards.setAttribute("class", "cardFlexBox");
            project.appendChild(toDoCards);

            if (projectArray[i].toDoArray.length > 0) {

                let toDoArray = projectArray[i].toDoArray;

                for (let k = 0; k < toDoArray.length; k++){
                    let displayCard = document.createElement("div");
                    displayCard.setAttribute("class", "displayCard");
                    toDoCards.appendChild(displayCard);

                    let displayCardTitle = document.createElement("h3");
                    displayCardTitle.innerHTML = toDoArray[k].title;
                    displayCard.appendChild(displayCardTitle);
                };
            };

            let formSection = document.createElement("div");
            formSection.setAttribute("id", "formSection");
            project.appendChild(formSection);
            
            let toDoButton = document.createElement("button");
            toDoButton.innerHTML = "create task";
            project.appendChild(toDoButton);
            appObject.newToDoButton(toDoButton, i);
        };
    };     
};

export { createProject };