/// Adding a new item to our todolist

const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todo-list");
const todoNr = document.getElementsByClassName("todo-nr")[0];

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "item 4";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "item 5";

todoList.appendChild(newItem); // To add a new item
todoList.appendChild(anotherItem); // Adding Another New Item

// Update the amount of items we have
todoNr.innerText = collectionItems.length;
