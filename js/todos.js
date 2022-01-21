const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const /** @type HTMLInputElement*/ toDoInput = document.querySelector("#todo-form input");
const TODOS_KEY = "todos";

let toDos = [];

/**
 *
 * @param {Event} event
 */
function handleToDosSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value= "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();

}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**
 *
 * @param {Event} event
 */
function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    li.id = newToDoObj.id;

    const button = document.createElement("button");
    button.style.backgroundColor = "transparent";
    button.style.border = "none";
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDosSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}