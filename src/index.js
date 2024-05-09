import "./style.css"
import {createTask, getTaskInfo, tasks } from "./tasks";
import { createProject, displayAllProjects, displayProject, projects } from "./projects";
import icon from "./add.png"



function addTaskToProject(){
    const task = prompt("choose task to add to project")
    const project = prompt("choose project to add the task to")
    const taskName = tasks[task].title;
    console.log(taskName);
    projects[project][taskName] = tasks[task];

    console.log(projects)
}

const tasksButton = document.getElementById("tasks-button");
tasksButton.addEventListener("click", () => display(tasks, "all-tasks", "task"))


const plusIcon = new Image();
plusIcon.src = icon;

const projectsHeader = document.getElementById("projects-header");
const h2 = document.createElement("h2");
h2.innerText = "Projects"
const addProjectButton = document.createElement("button");

projectsHeader.appendChild(h2)
projectsHeader.appendChild(addProjectButton);
addProjectButton.appendChild(plusIcon);




function display(obj, elId, elClass) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    const container = document.createElement("div");
    container.setAttribute("id", elId);
    contentDiv.appendChild(container);

    for (const key in obj) {
        const div = document.createElement("div");
        div.innerHTML = tasks[key].title
        div.classList.add(elClass)
        container.appendChild(div)
    }

}