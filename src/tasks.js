export const tasks = {};


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
}

export function displayTask() {
    console.log(tasks)
}




