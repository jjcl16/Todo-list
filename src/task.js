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
}
