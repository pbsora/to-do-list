import {
  Task,
  addToStorage,
  getFromStorage,
  deleteTask,
  getTask,
  updateValue,
  newTask,
} from "./task";
import "./style.css";
import { populateDom, populateTasks } from "./page";

populateDom();

populateTasks();

// Create function that makes new task, adds to storage then creates DOM task
