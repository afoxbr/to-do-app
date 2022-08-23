function createProject() {
    project = document.createElement("div");
    project.setAttribute("class", "project");
    document.getElementById("content").appendChild(project);
    toDoButton = document.createElement("button");
    toDoButton.innerHTML = "create task";
    project.appendChild(toDoButton);
};

export { createProject };