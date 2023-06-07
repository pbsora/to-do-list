export default function populateDom() {
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
  const plusSign = document.createElement("p");
  plusSign.innerText = "+";
  btn.appendChild(plusSign);
  sideBar.appendChild(btn);

  //Content
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  main.appendChild(content);

  document.body.appendChild(main);
}

export function createTask(title, description, date, priority, completion) {
  //do stuff
}
