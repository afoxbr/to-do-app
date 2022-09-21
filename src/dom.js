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

                    if (toDoArray[k].priority == true) {
                        displayCard.classList.add("highPriority");
                    };

                    let displayCardTitle = document.createElement("h3");
                    displayCardTitle.innerHTML = toDoArray[k].title;
                    displayCard.appendChild(displayCardTitle);

                    let displayCardDate = document.createElement("div");
                    displayCardDate.innerHTML = toDoArray[k].dueDate;
                    displayCard.appendChild(displayCardDate);

                    let displayCardExpand = document.createElement("div");
                    displayCard.appendChild(displayCardExpand);

                    let fullDisplay = false;

                    let displayCardButtons = document.createElement("div");
                    displayCardButtons.setAttribute("class", "displayCardButtons");
                    displayCard.appendChild(displayCardButtons);

                    let expandButton = document.createElement("button");
                    expandButton.innerHTML = "Expand";
                    displayCardButtons.appendChild(expandButton);

                    expandButton.addEventListener("click", () => {
                        if (fullDisplay == false) {
                            let displayCardDesc = document.createElement("p");
                            displayCardDesc.innerHTML = toDoArray[k].description;
                            displayCardExpand.appendChild(displayCardDesc);
                            
                            expandButton.innerHTML = "Collapse";
                            fullDisplay = true;
                        } else if (fullDisplay == true) {
                            displayCardExpand.innerHTML = "";

                            expandButton.innerHTML = "Expand";

                            fullDisplay = false;
                        };
                    });

                    let finishButton = document.createElement("button");
                    finishButton.innerHTML = "Complete";
                    displayCardButtons.appendChild(finishButton);

                    finishButton.addEventListener("click", () => {
                        toDoArray.splice(k, 1);
                        createProject();
                    });
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