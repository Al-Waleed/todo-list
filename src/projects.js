export const projects = {proj1:{one:{title: 'test', description: 'one'}, two:{title: 'test2', description: 'two'}}, proj2:{one:{title: 'test', description: 'one'}, two:{title: 'test2', description: 'two'}}};

export function createProject(){
    const newProject = prompt("Name of ur project");
    projects[newProject] = {};
}

export function displayAllProjects(){
    console.log(projects);
}
