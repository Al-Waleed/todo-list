import "./style.css"
import {createTask, displayTask, getTaskInfo, tasks } from "./tasks";
import { createProject, displayAllProjects, displayProject, projects } from "./projects";


function addTaskToProject(){
    const task = prompt("choose task to add to project")
    const project = prompt("choose project to add the task to")
    const taskName = tasks[task].title;
    console.log(taskName);
    projects[project][taskName] = tasks[task];

    console.log(projects)
}