import {
  Task,
  addToStorage,
  getFromStorage,
  deleteTask,
  getTask,
  updateValue,
} from "./task";
import "./style.css";
import populateDom from "./page";

populateDom();

const teste = new Task("teste", "vamove", "16/06", 1, false);
const teste2 = new Task("teste2", "vamove2", "16/062", 2, true);

addToStorage(teste);
addToStorage(teste2);

getFromStorage();
// it changes, just doesnt update the array
teste.updateValue("querove", "title");
console.log(teste);

getTask();
