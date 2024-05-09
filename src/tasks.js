export const tasks = {one:{title: 'test', description: 'one'}, two:{title: 'test2', description: 'two'}, three:{title: 'test3', description: 'three'} , four:{title: 'test4', description: 'four'}, five:{title: 'test5', description: 'five'}};


export function getTaskInfo(){
    const title = prompt("title");
    const description = prompt("description");
    const dueDate = prompt("dueDate");
    const priority = prompt("priority");
    const isChecked = prompt("is it done");
    return {title, description, dueDate, priority, isChecked};
}

export function createTask() {
    const newTask = getTaskInfo();
    tasks[newTask.title] = newTask;
    console.log(tasks);
}

export function displayTask() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    const allTasksDiv = document.createElement("div");
    allTasksDiv.setAttribute("id", "all-tasks");
    contentDiv.appendChild(allTasksDiv);

    for (const task in tasks) {
        const taskDiv = document.createElement("div");
        taskDiv.innerHTML = tasks[task].title
        taskDiv.classList.add("task")
        allTasksDiv.appendChild(taskDiv)
    }

}




