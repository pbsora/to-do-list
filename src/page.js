import { getPosition, getFromStorage } from "./task";
const modal = document.querySelector("dialog");

export function populateDom() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");

  //Header
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  const headerTitle = document.createElement("p");
  headerTitle.innerText = "Sora";
  header.appendChild(headerTitle);
  main.appendChild(header);

  //Sidebar
  const sideBar = document.createElement("div");
  sideBar.setAttribute("id", "sidebar");
  const sideOptions = document.createElement("div");
  sideOptions.setAttribute("class", "sidebar-options");
  sideBar.appendChild(sideOptions);
  const all = document.createElement("p");
  all.innerText = "All";
  sideOptions.appendChild(all);
  const today = document.createElement("p");
  today.innerText = "Today";
  sideOptions.appendChild(today);
  const week = document.createElement("p");
  week.innerText = "Week";
  sideOptions.appendChild(week);
  main.appendChild(sideBar);

  //Sidebar projects
  const sideProjects = document.createElement("div");
  sideProjects.setAttribute("class", "sidebar-projects");
  const projects = document.createElement("h1");
  projects.innerText = "Projects";
  sideProjects.appendChild(projects);
  const study = document.createElement("p");
  study.innerText = "Study";
  sideProjects.appendChild(study);
  const gym = document.createElement("p");
  gym.innerText = "Gym";
  sideProjects.appendChild(gym);
  sideBar.appendChild(sideProjects);

  //+ button

  const btn = document.createElement("button");
  btn.setAttribute("class", "add-task");
  const plusSign = document.createElement("div");
  plusSign.innerText = "+";
  btn.appendChild(plusSign);
  btn.addEventListener("click", () => {
    modal.showModal();
  });
  sideBar.appendChild(btn);

  //Content
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  main.appendChild(content);

  document.body.appendChild(main);
}

export function createTask(title, description, date, priority, completion) {
  const content = document.getElementById("content");
  const position = getPosition();

  //Create task unit
  const task = document.createElement("div");
  task.setAttribute("class", `task green-task ${position + 1} `);

  const checkTask = document.createElement("input");
  checkTask.setAttribute("type", "checkbox");
  checkTask.setAttribute("class", "check-task");
  task.appendChild(checkTask);
  const taskTitle = document.createElement("p");
  taskTitle.innerText = title;
  taskTitle.setAttribute("class", "title");
  task.appendChild(taskTitle);
  const usabilities = document.createElement("div");
  //usabilities part
  usabilities.setAttribute("class", "usabilities");
  const detailsBtn = document.createElement("button");
  detailsBtn.setAttribute("class", "details");
  detailsBtn.innerText = "Details";
  usabilities.appendChild(detailsBtn);
  const taskDate = document.createElement("p");
  taskDate.innerText = date;
  taskDate.setAttribute("class", "date");
  usabilities.appendChild(taskDate);
  //edit icon
  const editIcon = document.createElement("div");
  editIcon.setAttribute("class", "edit-icon icon");
  const editImg = document.createElement("img");
  editImg.src = "../src/images/edit.svg";
  editImg.alt = "edit-icon";
  editIcon.appendChild(editImg);
  usabilities.appendChild(editIcon);

  //delete icon
  const deleteIcon = document.createElement("div");
  deleteIcon.setAttribute("class", "delete-icon icon");
  const deleteImg = document.createElement("img");
  deleteImg.src = "../src/images/delete.svg";
  deleteImg.alt = "delete-icon";
  deleteIcon.appendChild(deleteImg);
  usabilities.appendChild(deleteIcon);

  task.appendChild(usabilities);

  content.appendChild(task);
}

export function populateTasks() {
  const tasks = getFromStorage();
  for (let task in tasks) {
    Object.keys(task).forEach((key) => {
      console.log(key); // the name of the current key.
      console.log(task[key]); // the value of the current key.
    });
  }
}
