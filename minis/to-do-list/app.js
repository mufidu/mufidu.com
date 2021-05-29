const todoFrom = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// Event Listener
immediateLoadEventListener();

function immediateLoadEventListener() {
    todoFrom.addEventListener("submit", addTodo);
    todoList.addEventListener("click", deleteTodo);
    clearButton.addEventListener("click", clearTodos);
    filterInput.addEventListener("keyup", filterTodos);
    document.addEventListener("DOMContentLoaded", getTodos);
}

//Reusable Codes
function createTodoElement(value) {
    //Membuat li element
    const li = document.createElement("li");
    li.className =
        "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";
    li.appendChild(document.createTextNode(value));

    //Membuat a element buat delete (append child dari li)
    const a = document.createElement("a");
    a.href = "#";
    a.className = "badge badge-danger delete-todo";
    a.innerHTML = "Delete";

    //Menyelipkan a jadi append child li
    li.appendChild(a);

    // Menyelipkan li jadi append child todo list
    todoList.appendChild(li);
}
function getItemFromLocalStorage() {
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

//DOM Functions
function addTodo(e) {
    e.preventDefault();

    if (todoInput.value) {
        createTodoElement(todoInput.value);

        // Menyimpan todo ke localStorage
        addTodoLocalStorage(todoInput.value);

        //Menghapus value todo setelah disubmit
        todoInput.value = "";
    } else {
        alert("Your task can't be empty");
    }
}

function addTodoLocalStorage(todoInputValue) {
    const todos = getItemFromLocalStorage();

    todos.push(todoInputValue);

    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    const todos = getItemFromLocalStorage();

    todos.forEach((todo) => {
        createTodoElement(todo);
    });
}

function deleteTodo(e) {
    e.preventDefault();

    if (e.target.classList.contains("delete-todo")) {
        if (confirm("Delete the task?")) {
            const parentDelete = e.target.parentElement;
            parentDelete.remove();
            deleteTodoLocalStorage(parentDelete);
        }
    }
}

function deleteTodoLocalStorage(deletedElement) {
    const todos = getItemFromLocalStorage();

    todos.forEach((todo, index) => {
        if (deletedElement.firstChild.textContent === todo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function clearTodos() {
    let konfirmasi = confirm("Delete all tasks? (Can't be undone!)");
    if (konfirmasi == true) {
        todoList.innerHTML = "";
        clearTodosLocalStorage();
    }
}

function clearTodosLocalStorage() {
    localStorage.clear();
}

function filterTodos(e) {
    const filterText = e.target.value.toLowerCase();
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(filterText) != -1) {
            item.setAttribute("style", "display: block;");
        } else {
            item.setAttribute("style", "display: none !important;");
        }
        console.log(itemText);
    });
}
