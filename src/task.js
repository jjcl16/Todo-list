export default class Task {
  constructor(title) {
    this.title = title;
  }
  setParameters(
    description,
    dueDate,
    priority,
    check
  ) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = check;
  }
}


