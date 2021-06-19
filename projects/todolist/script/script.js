let todos = [];
document.addEventListener("DOMContentLoaded", () => {
    const formInput = document.getElementById("inputtask");
    const filter = document.getElementById("filtertask");
    formInput.addEventListener("submit", (e) => {
        e.preventDefault();
        addTodo();
        formInput.reset();
    });

    filter.addEventListener("input", (e) => {
        e.preventDefault();
        filterTodo();
    });

    if (isStorageExist()) {
        loadData();
    }
});

document.addEventListener("ondataloaded", () => {
    refreshData();
});

function makeTodo(name, date, isdone) {
    const article = document.createElement("article");
    article.classList.add("task");

    const h3 = document.createElement("h3");
    h3.innerHTML = name;

    const p = document.createElement("p");
    p.innerHTML = "Due date: " + date;
    p.classList.add("date");

    article.append(h3, p);

    if (isdone) {
        article.append(btnUndone(), btnDelete());
    } else {
        article.append(btnDone(), btnDelete());
    }

    return article;
}

function makeTodoObject(name, date, isDone) {
    return {
        id: +new Date(),
        name,
        date,
        isDone,
    };
}

function addTodo() {
    const notDone = document.getElementById("notdone");
    const done = document.getElementById("done");

    const inputName = document.getElementById("inputname").value;
    const inputDate = document.getElementById("inputdate").value;
    const inputDone = document.getElementById("inputdone").checked;

    const newTodo = makeTodo(inputName, inputDate, inputDone);

    const newTodoObject = makeTodoObject(inputName, inputDate, inputDone);

    newTodo["id"] = newTodoObject.id;

    if (inputDone) {
        done.append(newTodo);
    } else {
        notDone.append(newTodo);
    }

    todos.push(newTodoObject);
    updateDataToStorage();
}

function makeBtn(buttonClass, eventListener) {
    const button = document.createElement("button");
    button.classList.add(buttonClass);
    button.addEventListener("click", function (e) {
        eventListener(e);
    });

    if (buttonClass == "done") {
        button.innerHTML =
            "<svg class='icon icon-tick-outline'><use xlink:href='#icon-tick-outline'></use></svg>";
    } else if (buttonClass == "delete") {
        button.innerHTML =
            "<svg class='icon icon-trash'><use xlink:href='#icon-trash'></use></svg>";
    } else if (buttonClass == "undone") {
        button.innerHTML =
            "<svg class='icon icon-arrow-back-outline'><use xlink:href='#icon-arrow-back-outline'></use></svg>";
    }

    return button;
}

function doneTodo(todo) {
    const done = document.getElementById("done");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    article.classList.add("task");
    h3.innerHTML = todo.querySelector("h3").innerHTML;
    p.innerHTML = todo.querySelector(".date").innerHTML;
    p.classList.add("date");

    article.append(h3, p, btnUndone(), btnDelete());

    done.append(article);

    const todoObject = findTodo(todo["id"]);
    todoObject.isDone = true;
    article["id"] = todoObject.id;

    todo.remove();
    updateDataToStorage();
}

function btnDone() {
    return makeBtn("done", function (e) {
        doneTodo(e.target.parentElement);
    });
}

function undoneTodo(todo) {
    const unDone = document.getElementById("notdone");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    article.classList.add("task");
    h3.innerHTML = todo.querySelector("h3").innerHTML;
    p.innerHTML = todo.querySelector(".date").innerHTML;
    p.classList.add("date");

    article.append(h3, p, btnDone(), btnDelete());

    unDone.append(article);

    const todoObject = findTodo(todo["id"]);
    todoObject.isDone = false;
    article["id"] = todoObject.id;

    todo.remove();
    updateDataToStorage();
}

function btnUndone() {
    return makeBtn("undone", function (e) {
        undoneTodo(e.target.parentElement);
    });
}

function deleteTodo(todo) {
    const confirmed = confirm("Delete task?");
    if (confirmed) {
        const indexTodo = findTodoIndex(todo["id"]);
        todos.splice(indexTodo, 1);

        todo.remove();
        updateDataToStorage();
    }
}

function btnDelete() {
    return makeBtn("delete", function (e) {
        deleteTodo(e.target.parentElement);
    });
}

function findTodo(id) {
    for (todo of todos) {
        if (todo.id == id) {
            return todo;
        }
    }
    return null;
}

function findTodoIndex(id) {
    let index = 0;
    for (todo of todos) {
        if (todo.id == id) {
            return index;
        }
        index++;
    }
}

function saveData() {
    const parsed = JSON.stringify(todos);
    localStorage.setItem("todos", parsed);
}

function isStorageExist() {
    if (typeof Storage === undefined) {
        alert(
            "Browser Anda tidak mendukung local storage. Silahkan upgrade browser Anda."
        );
        return false;
    }
    return true;
}

function updateDataToStorage() {
    if (isStorageExist()) saveData();
}

function loadData() {
    const localData = localStorage.getItem("todos");
    const data = JSON.parse(localData);

    if (data != null) {
        todos = data;
    }

    const unDone = document.getElementById("notdone");
    const done = document.getElementById("done");

    for (item of todos) {
        const todo = makeTodo(item.name, item.date, item.isDone);
        todo["id"] = item.id;

        if (!item.isDone) {
            unDone.append(todo);
        } else {
            done.append(todo);
        }
    }
}

function filterTodo() {
    const taskName = document.getElementById("filtertask").value;
    taskName.toString();

    const notSearched = [];

    for (item of todos) {
        item.name.toString();
        if (!item.name.includes(taskName)) {
            notSearched.push(item.id);
        }
    }

    const allTodo = document.querySelectorAll(".task");
    for (todo of allTodo) {
        todo.style.display = "block";
    }

    for (todo of allTodo) {
        for (id of notSearched) {
            if (todo["id"] == id) {
                todo.style.display = "none";
            }
        }
    }
}
