export default class Task {
  title;
  description;
  dueDate;
  priority;
  check;
  constructor(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  setCheck(check) {
    this.check = check;
  }

  setParameters(description, dueDate, priority, check) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = check;
  }
}
