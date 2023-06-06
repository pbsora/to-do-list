import { Task, addToStorage, getFromStorage } from "./task";

const teste = new Task("teste", "vamove", "16/06", 1, false);
const teste2 = new Task("teste2", "vamove2", "16/062", 2, true);
export let task = [];

addToStorage(teste);
addToStorage(teste2);

getFromStorage();

console.dir(task[0]);
