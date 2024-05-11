import "./style.css";
import { createTask, getTaskInfo, tasks } from "./tasks";
import { createProject, displayProjectsTab, projects } from "./projects";
import icon from "./add.png";

function addTaskToProject() {
  const task = prompt("choose task to add to project");
  const project = prompt("choose project to add the task to");
  const taskName = tasks[task].title;
  console.log(taskName);
  projects[project][taskName] = tasks[task];

  console.log(projects);
}

const tasksButton = document.getElementById("tasks-button");
tasksButton.addEventListener("click", () => display(tasks));

const projectsHeader = document.getElementById("projects-header");

const projectsButton = document.createElement("projectsButton");
projectsButton.setAttribute("id", "projects-button");
projectsButton.innerText = "Projects";
projectsHeader.appendChild(projectsButton);
projectsButton.addEventListener("click", () => {
  display(projects);
  displayProjectsTab();
});

const newProjectButton = document.createElement("button");
newProjectButton.setAttribute("id", "new-project");
projectsHeader.appendChild(newProjectButton);
newProjectButton.addEventListener("click", () => {
  createProject();
  displayProjectsTab();
});

const plusIcon = new Image();
plusIcon.src = icon;
newProjectButton.appendChild(plusIcon);

function display(obj) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  const container = document.createElement("div");
  container.setAttribute("id", "all");
  contentDiv.appendChild(container);

  for (const key in obj) {
    const div = document.createElement("div");
    div.innerHTML = key;
    container.appendChild(div);
  }
}

displayProjectsTab();
