import Task from "./task";
export function addNewTask(project, task) {
  let projectTasks;
  if (localStorage[project] != undefined) {
    projectTasks = localStorage[project];
    projectTasks += ">:/|/:<" + task;
    localStorage[project] = projectTasks;
  } else {
    localStorage[project] = task;
  }
}

export function addParameters(project, taskName, description, dueDate, priority, check){
  let tasks = readAllTask(project);
  console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
   if (taskName == (JSON.parse(tasks[i]).title)) {
      let taskWithParameters = new Task(taskName);
      taskWithParameters.setParameters( description, dueDate, priority, check);
      let jsonTask = JSON.stringify(taskWithParameters);
      tasks.splice(i, 1, jsonTask);      
      localStorage[project] = tasks;
      console.log(localStorage[project]);
      return tasks;  
    } 
  } 
}

export function readAllTask(project) {
  if (localStorage[project] != undefined) {
    let projectTasks = localStorage[project];
    return projectTasks.split(">:/|/:<");
  }
}


export function removeTask(project, taskName){
  let tasks = readAllTask(project);
  for (let i = 0; i < tasks.length; i++) {
    if (taskName == JSON.parse(tasks[i]).title) {
      tasks.splice(i,1);      
      localStorage[project] = tasks;
      return tasks;
    }    
  }   
}

export function readAllProjects() {
  let projects = [];
  if (localStorage.length) {
    projects = localStorage.projects;
    projects = projects.split(",");
    return projects;
  }
}

export function addNewProject(projectName) {
  let projects;
  if (localStorage.projects != undefined) {
    projects = localStorage.projects;
    projects = projects.split(",");
    projects.push(projectName);
    localStorage.projects = projects;
  } else localStorage.projects = projectName;

  console.log(localStorage);
}
