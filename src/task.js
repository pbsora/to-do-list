export let task = [];

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

  updateValue(newValue, key) {
    this[key] = newValue;
    console.log(task[0]);
  }
}

export function addToStorage(newTask) {
  task.push(newTask);
  updateStorage();
}

export function getFromStorage() {
  let taskStorage = JSON.parse(localStorage.getItem("task"));
  task = taskStorage.map(
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

export function updateStorage() {
  localStorage.setItem("task", JSON.stringify(task));
  getFromStorage();
}

export function deleteTask(index) {
  task.splice(index, 1);
  console.log(task);
  updateStorage();
}

export function getTask() {
  console.log(task);
}

/* export function */
