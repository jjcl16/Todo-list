//import _ from 'lodash';
import task from "./task";
//import { setParameters } from "./task";
import {
  addNewProject,
  readAllProjects,
  addNewTask,
  readAllTask,
  removeTask,
  addParameters
} from "./localStorageOperations";
import "./style.css";

const projectList = document.querySelector(".projectList");
const newProjectName = document.querySelector("#ProjectName");
const dashboard = document.querySelector("#board");

const projectTitle = document.querySelector("#projectTitle");
const taskName = document.querySelector("#taskName");

/*
const texto = document.createElement("div");
texto.textContent = "Hola";
document.body.appendChild(texto);
*/
/*
      <div id="projectTitle">Title</div>
      <label for="taskName">Task Name:</label>
      <input type="text" id="taskName">
      <button id="insertTask"></button>
      <button id="insertTaskParameters"></button>
*/

const buttonAddNewProjects = document.querySelector("#projects");
buttonAddNewProjects.addEventListener("click", insertNewProject);

const insertTaskButton = document.querySelector("#insertTask");
insertTaskButton.textContent = "Insert task";
insertTaskButton.addEventListener("click", insertTask);

const insertTaskParametersButton = document.querySelector(
  "#insertTaskParameters"
);
insertTaskParametersButton.textContent = "Insertar parametros";
insertTaskParametersButton.addEventListener("click", insertParams);

function insertTask() {
  if (taskName.value != "") {
    let newTask = new task(taskName.value);
    let project = projectTitle.textContent;
    addNewTask(project, JSON.stringify(newTask));
    console.log(readAllTask(project));
  }
}

function insertParams() {
  //setParameters("432", "asd");
  let project = projectTitle.textContent;
  addParameters(project, "asdasdas", "saludo"," asdasd ", "asd ", true);
}

function insertNewProject() {
  let name = newProjectName.value;
  while (projectList.childNodes.length) {
    projectList.removeChild(projectList.lastChild);
  }
  if (name) {
    addNewProject(name);
    readAllProjects().forEach((project) => {
      const newProjectItem = document.createElement("li");
      newProjectItem.addEventListener("click", loadDashboard);
      newProjectItem.textContent = project;
      projectList.appendChild(newProjectItem);
    });
  }
}

function loadDashboard(e) {
  console.log(e);
  projectTitle.textContent = e.target.innerText;
}
