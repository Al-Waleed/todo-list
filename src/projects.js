export const projects = {};

export function createProject(){
    const newProject = prompt("Name of ur project");
    projects[newProject] = {};
}

export function displayAllProjects(){
    console.log(projects);
}

export function displayProject(){
    const project = prompt("choose a project");
    console.log(projects[project]);
}