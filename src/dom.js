function createProject() {
    const project = document.createElement("div");
    project.setAttribute("class", "project");
    document.getElementById("content").appendChild(project);
    const projectTitle = document.createElement("h2");
    projectTitle.innerHTML = "Daily Tasks";
    project.appendChild(projectTitle);
    const toDoCards = document.createElement("div");
    project.appendChild(toDoCards);
    const toDoButton = document.createElement("button");
    toDoButton.setAttribute("class", "newToDo");
    toDoButton.innerHTML = "create task";
    project.appendChild(toDoButton);
};

export { createProject };