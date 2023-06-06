import { task } from ".";

export class Task {
  constructor(title, description, dueDate, priority, completion) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completion = completion;
  }

  markComplete() {
    return (this.completion = this.completion ? false : true);
  }
}

export function addToStorage(newTask) {
  task.push(newTask);
  localStorage.setItem("task", JSON.stringify(task));
}

export function getFromStorage() {
  task = JSON.parse(localStorage.getItem("task"));
  task = task.map(
    (task) =>
      new Task(
        task.title,
        task.description,
        task.dueDate,
        task.priority,
        task.completion
      )
  );
}
