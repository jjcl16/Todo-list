import Task from "./task";
import {
  addNewProject,
  readAllProjects,
  addNewTask,
  readAllTask,
  removeTask,
  addParametersV2,
  RemoveProject
} from "./localStorageOperations";
import "./style.css";

const projectList = document.querySelector(".projectList");
const newProjectName = document.querySelector("#ProjectName");
const dashboard = document.querySelector("#board");

const buttonAddNewProjects = document.querySelector("#projects");
buttonAddNewProjects.addEventListener("click", insertNewProject);
loadProjects();

function getTask() {
  const tarea = document.querySelector("#taskName");
  return tarea.value;
}

function getProject() {
  const project = document.querySelector("#projectTitle");
  return project.textContent;
}

function insertTask() {
  let tarea = getTask();
  let project = getProject();
  if (tarea != "") {
    let newTask = new Task(tarea);
    addNewTask(project, JSON.stringify(newTask));
  }
  loadDashboard(project);
}

function insertNewProject() {
  let name = newProjectName.value;  
  if (name) {
    addNewProject(name);
    loadProjects();
  }
}

function loadDashboardFor(e) {  
  loadDashboard(e.target.innerText);  
}

function loadDashboard(projectName) {
  while (dashboard.childNodes.length) {
    dashboard.removeChild(dashboard.lastChild);
  }
  if (projectName){
    const newTaskContainer = document.createElement("div");
    newTaskContainer.setAttribute("id", "newTaskContainer");

    const projectTitle = document.createElement("div");
    projectTitle.setAttribute("id", "projectTitle");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "taskName");
    titleLabel.setAttribute("id", "labelTaskName");
    titleLabel.textContent = "Task Name:";

    const taskName = document.createElement("input");
    taskName.setAttribute("type", "text");
    taskName.setAttribute("id", "taskName");

    const insertTaskButton = document.createElement("button");
    insertTaskButton.setAttribute("id", "insertTask");
    insertTaskButton.textContent = "✚";
    insertTaskButton.addEventListener("click", insertTask);   
  
    projectTitle.textContent = projectName;

    newTaskContainer.appendChild(projectTitle);
    newTaskContainer.appendChild(titleLabel);
    newTaskContainer.appendChild(taskName);
    newTaskContainer.appendChild(insertTaskButton);

    dashboard.appendChild(newTaskContainer);

    const tasksContainer = document.createElement("div");
    tasksContainer.setAttribute("id", "tasksContainer");

    dashboard.appendChild(tasksContainer);
    
    loadTasks();
  }
}

function loadProjects() {
  while (projectList.childNodes.length) {
    projectList.removeChild(projectList.lastChild);
  }
  readAllProjects().forEach((project) => {
    if(project != ""){
      const projectContainer = document.createElement("div");
      projectContainer.setAttribute("class", "projectContainer");

      const newProjectItem = document.createElement("li");
      newProjectItem.addEventListener("click", loadDashboardFor);    
      newProjectItem.textContent = project;
      projectContainer.appendChild(newProjectItem);

      const RemoveProjectButton = document.createElement("button");
      RemoveProjectButton.setAttribute("id", "RemoveProjectButton");
      RemoveProjectButton.textContent = "🗑️";
      RemoveProjectButton.project = project;
      RemoveProjectButton.addEventListener("click", removeProjectCall);
      projectContainer.appendChild(RemoveProjectButton);

      projectList.appendChild(projectContainer);

    }    
  });
}

function loadTasks() {
  let project = getProject();
  let tasks = readAllTask(project);

  const tasksContainer = document.querySelector("#tasksContainer");

  tasks.forEach((task) => {
    const taskObject = Object.assign(new Task(), JSON.parse(task));
    const taskbox = document.createElement("div");
    taskbox.classList.add("taskBox");

    const Tasktitle = document.createElement("div");
    Tasktitle.textContent = taskObject.title;
    taskbox.appendChild(Tasktitle);

    const taskDescrip = document.createElement("textarea");
    taskDescrip.classList.add("taskDescrip");
    taskDescrip.setAttribute("type", "text");
    taskDescrip.setAttribute("placeholder", "Description");
    taskDescrip.setAttribute("maxlength", "140");
    taskDescrip.setAttribute("cols", "40");
    taskDescrip.setAttribute("rows", "4");
    ////
    taskDescrip.param = "description";
    taskDescrip.project = project;
    taskDescrip.task = taskObject.title;
    taskDescrip.addEventListener("change", insertParamsV2);
    ///
    taskDescrip.value = taskObject.description ? taskObject.description : "";


    
    taskbox.appendChild(taskDescrip);

    const dueDate = document.createElement("input");
    dueDate.classList.add("dueDate");
    dueDate.setAttribute("type", "date");
    dueDate.value = taskObject.dueDate ? taskObject.dueDate : "";
    //
    dueDate.param = "dueDate";
    dueDate.project = project;
    dueDate.task = taskObject.title;
    dueDate.addEventListener("change", insertParamsV2);
    //
    taskbox.appendChild(dueDate);

    const priority = document.createElement("input");
    priority.classList.add("priority");
    priority.setAttribute("type", "text");
    priority.setAttribute("maxlength", "15");
    priority.setAttribute("placeholder", "Priority");
    priority.value = taskObject.priority ? taskObject.priority : "";
    //
    priority.param = "priority";
    priority.project = project;
    priority.task = taskObject.title;
    priority.addEventListener("change", insertParamsV2);
    //
    taskbox.appendChild(priority);

    const checkTask = document.createElement("input");
    checkTask.classList.add("check");
    checkTask.setAttribute("type", "checkbox");
    checkTask.checked = taskObject.check;
    //
    checkTask.param = "check";
    checkTask.project = project;
    checkTask.task = taskObject.title;
    checkTask.addEventListener("change", insertParamsV2);
    //
    taskbox.appendChild(checkTask);
 
    const RemoveTaskButton = document.createElement("button");
    RemoveTaskButton.setAttribute("class", "RemoveTaskButton");
    RemoveTaskButton.textContent = "🗑️";
    RemoveTaskButton.project = project;
    RemoveTaskButton.task = taskObject.title;
    RemoveTaskButton.addEventListener("click", removeTaskCall);
    taskbox.appendChild(RemoveTaskButton); 

    tasksContainer.appendChild(taskbox);
  });
}

function insertParamsV2(e) {
  const project = e.currentTarget.project;
  const task = e.currentTarget.task;
  const param = e.currentTarget.param;
  const value = e.currentTarget.value;
  const checked = e.currentTarget.checked;
  addParametersV2(project, task, param, value, checked);
}

function removeTaskCall(e){
  const project = e.currentTarget.project;
  const task = e.currentTarget.task;
  removeTask (project,task);
  loadDashboard(project);
}

function removeProjectCall(e){
  const project = e.currentTarget.project;
  RemoveProject(project);
  loadProjects();
  if (getProject() ==  project){    
    loadDashboard();
  }
}