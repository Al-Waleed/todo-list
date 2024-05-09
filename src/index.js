import "./style.css"
import {createTask, displayTask, getTaskInfo, tasks } from "./tasks";
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
tasksButton.addEventListener("click", () => displayTask())


const plusIcon = new Image();
plusIcon.src = icon;

const projectsHeader = document.getElementById("projects-header");
const h2 = document.createElement("h2");
h2.innerText = "Projects"
const addProjectButton = document.createElement("button");

projectsHeader.appendChild(h2)
projectsHeader.appendChild(addProjectButton);
addProjectButton.appendChild(plusIcon);
