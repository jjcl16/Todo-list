import Task from "./task";

export function addNewTask(project, task) {
  let projectTasks = localStorage[project];
  if (
    projectTasks != undefined &&
    tasksCheckName(projectTasks, JSON.parse(task).title)
  ) {
    projectTasks = localStorage[project];
    projectTasks += ">:/|/:<" + task;
    localStorage[project] = projectTasks;
  } else if (projectTasks == undefined) {
    localStorage[project] = task;
  }
}

function tasksCheckName(tasks, taskNameToCheck) {
  let nameItsOK = true;
  tasks = tasks.split(">:/|/:<");
  tasks.forEach((task) => {
    let taskComprare = JSON.parse(task);
    nameItsOK &= taskComprare.title != taskNameToCheck ? true : false;
  });
  console.log(nameItsOK);
  return nameItsOK;
}

export function addParameters(
  project,
  taskName,
  description,
  dueDate,
  priority,
  check
) {
  let tasks = readAllTask(project);
  let newTasks;
  console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
    if (taskName == JSON.parse(tasks[i]).title) {
      let taskWithParameters = new Task(taskName);
      taskWithParameters.setParameters(description, dueDate, priority, check);
      let jsonTask = JSON.stringify(taskWithParameters);
      tasks.splice(i, 1, jsonTask);
      //return tasks;
    }
    if (i == 0) {
      newTasks = tasks[i];
    } else {
      newTasks += ">:/|/:<" + tasks[i];
    }
  }
  localStorage[project] = newTasks;
  return newTasks;
}

export function readAllTask(project) {
  if (localStorage[project] != undefined) {
    let projectTasks = localStorage[project];
    return projectTasks.split(">:/|/:<");
  }
}

export function removeTask(project, taskName) {
  let tasks = readAllTask(project);
  let newTasks;
  for (let i = 0; i < tasks.length; i++) {
    if (taskName == JSON.parse(tasks[i]).title) {
      tasks.splice(i, 1);
      //localStorage[project] = tasks;
      //return tasks;
    }
    if (i == 0 && tasks[i] != undefined) {
      newTasks = tasks[i];
    } else if (tasks[i] != undefined){
      newTasks += ">:/|/:<" + tasks[i];
    } else {
      delete localStorage[project];
    }   
  }
  if(newTasks!= undefined){
    localStorage[project] = newTasks;
  }  
  return newTasks;
}

export function readAllProjects() {
  
 return localStorage["projects"].split(",");
}

export function addNewProject(projectName) {
  let projects;
  if (localStorage.projects != undefined && projectsCheckName(projectName)) {
    projects = localStorage.projects;
    projects = projects.split(",");
    projects.push(projectName);
    localStorage.projects = projects;
  } else if (projectsCheckName(projectName))
    localStorage.projects = projectName;
}

function projectsCheckName(projectName) {
  let projects;
  let nameItsOK = true;
  if (projectName != "projects") {
    if (localStorage.projects != undefined) {
      projects = localStorage.projects;
      projects = projects.split(",");
      projects.forEach((project) => {
        nameItsOK &= project != projectName ? true : false;
      });
    }
  } else {
    nameItsOK = false;
  }
  return nameItsOK;
}

export function addParametersV2(project, task, param, value, checked) {
  const tasks = readAllTask(project);
  let newTasks;
  console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
    if (task == JSON.parse(tasks[i]).title) {
      const taskObject = Object.assign(new Task(), JSON.parse(tasks[i]));
      //let taskObject = new Task(task)
      switch (param) {
        case "description":
          taskObject.setDescription(value);
          break;
        case "dueDate":
          taskObject.setDueDate(value);
          break;
        case "priority":
          taskObject.setPriority(value);
          break;
        case "check":
          taskObject.setCheck(checked);
          break;
      }
      let jsonTask = JSON.stringify(taskObject);
      console.log(jsonTask);
      tasks.splice(i, 1, jsonTask);
    }
    if (i == 0) {
      newTasks = tasks[i];
    } else {
      newTasks += ">:/|/:<" + tasks[i];
    }
  }
  localStorage[project] = newTasks;
  return newTasks;
}

export function RemoveProject(project){
  delete localStorage[project];

  const projects = readAllProjects();
  for (let i = 0; i < projects.length; i++) {
    if (projects[i]== project){
      projects.splice(i,1);
    }    
  }
  localStorage["projects"] = projects;
}