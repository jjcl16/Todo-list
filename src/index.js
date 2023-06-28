//import _ from 'lodash';
import Task from "./task";
//import { setParameters } from "./task";
import {
  addNewProject,
  readAllProjects,
  addNewTask,
  readAllTask,
  removeTask,
  addParameters,
  addParametersV2,
  RemoveProject
} from "./localStorageOperations";
import "./style.css";

const projectList = document.querySelector(".projectList");
const newProjectName = document.querySelector("#ProjectName");
const dashboard = document.querySelector("#board");

//const projectTitle = document.querySelector("#projectTitle");
//const taskName = document.querySelector("#taskName");

/*
const texto = document.createElement("div");
texto.textContent = "Hola";
document.body.appendChild(texto);
*/

const buttonAddNewProjects = document.querySelector("#projects");
buttonAddNewProjects.addEventListener("click", insertNewProject);
/*
const insertTaskButton = document.querySelector("#insertTask");
insertTaskButton.textContent = "Insert task";
insertTaskButton.addEventListener("click", insertTask);

const insertTaskParametersButton = document.querySelector(
  "#insertTaskParameters"
);
insertTaskParametersButton.textContent = "Insertar parametros";
insertTaskParametersButton.addEventListener("click", insertParams);
*/
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

function insertParams(e) {
  console.log(e.currentTarget.taskDescription);
  console.log(e.currentTarget.taskUpdate);
  const project = getProject();
  //addParameters(project, taskToUpdate.title , taskToUpdate.description , taskToUpdate.date , taskToUpdate.priority , taskToUpdate.check);
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
  const projectTitle = document.createElement("div");
  projectTitle.setAttribute("id", "projectTitle");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "taskName");
  titleLabel.textContent = "Task Name:";

  const taskName = document.createElement("input");
  taskName.setAttribute("type", "text");
  taskName.setAttribute("id", "taskName");

  const insertTaskButton = document.createElement("button");
  insertTaskButton.setAttribute("id", "insertTask");
  insertTaskButton.textContent = "Insert task";
  insertTaskButton.addEventListener("click", insertTask);

 
 projectTitle.textContent = projectName;

  dashboard.appendChild(projectTitle);
  dashboard.appendChild(titleLabel);
  dashboard.appendChild(taskName);
  dashboard.appendChild(insertTaskButton);
  
  loadTasks();
}

function loadProjects() {
  while (projectList.childNodes.length) {
    projectList.removeChild(projectList.lastChild);
  }
  readAllProjects().forEach((project) => {
    if(project != ""){
      const newProjectItem = document.createElement("li");
      newProjectItem.value = project;
      newProjectItem.addEventListener("click", loadDashboardFor);    
      newProjectItem.textContent = project;
      projectList.appendChild(newProjectItem);

      const RemoveProjectButton = document.createElement("button");
      RemoveProjectButton.setAttribute("id", "RemoveProjectButton");
      RemoveProjectButton.textContent = "Remove Project";
      RemoveProjectButton.project = project;
      RemoveProjectButton.addEventListener("click", removeProjectCall);
      projectList.appendChild(RemoveProjectButton);
    }    
  });
}

function loadTasks() {
  let project = getProject();
  let tasks = readAllTask(project);



  tasks.forEach((task) => {
    const taskObject = Object.assign(new Task(), JSON.parse(task));
    console.log(taskObject);
    const taskbox = document.createElement("div");
    taskbox.classList.add("taskBox");

    const Tasktitle = document.createElement("div");
    Tasktitle.textContent = taskObject.title;
    taskbox.appendChild(Tasktitle);

    const taskDescrip = document.createElement("input");
    taskDescrip.classList.add("taskDescrip");
    taskDescrip.setAttribute("type", "text");
    taskDescrip.setAttribute("placeholder", "Description");
    taskDescrip.setAttribute("maxlength", "140");
    ////
    taskDescrip.param = "description";
    taskDescrip.project = project;
    taskDescrip.task = taskObject.title;
    taskDescrip.addEventListener("change", insertParamsV2);
    ///
    taskDescrip.value = taskObject.description ? taskObject.description : "";
    taskbox.appendChild(taskDescrip);

    const dueDate = document.createElement("input");
    dueDate.classList.add("taskDescrip");
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
    priority.setAttribute("maxlength", "140");
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
    checkTask.setAttribute("maxlength", "140");
    checkTask.checked = taskObject.check;
    //
    checkTask.param = "check";
    checkTask.project = project;
    checkTask.task = taskObject.title;
    checkTask.addEventListener("change", insertParamsV2);
    //
    taskbox.appendChild(checkTask);


 
    const RemoveTaskButton = document.createElement("button");
    RemoveTaskButton.setAttribute("id", "RemoveTaskButton");
    RemoveTaskButton.textContent = "Remove task";
    RemoveTaskButton.project = project;
    RemoveTaskButton.task = taskObject.title;
    RemoveTaskButton.addEventListener("click", removeTaskCall);
    taskbox.appendChild(RemoveTaskButton);
  

    dashboard.appendChild(taskbox);
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
    const projects = readAllProjects();
    loadDashboard(projects[projects.length-1]);
  }
}