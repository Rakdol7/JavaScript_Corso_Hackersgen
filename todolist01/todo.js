"use strict"

const todos = [
    /*{id: 1, description: "Learn programming", done: true},
    {id: 2, description: "Learn JavaScript", done: false},*/
];

const form = document.getElementById("add_todo_form");
const textInput = document.getElementById("todo_text");

function insertTodo(todos, description) {
    todos.push({
        description: description,
        done: false
    });
}

function render(ul, todos) {
    ul.innerHTML = ""; //FIXME: performance

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        const li = itemTpl.cloneNode(true);
        ul.appendChild(li);

        const chk = li.querySelector("input");

        if (todo.done) {
            li.classList.add("done");
            chk.checked = true;
            chk.disabled = true;

            setTimeout(function() {
               li.remove(); //FIXME: error on rerender
            }, 500);
        }
        else {
            chk.onclick = function () {
                todo.done = true;
                render(ul, todos) //XXX
            };
        }

        const span = li.querySelector("span");
        span.textContent = todo.description;
    }
}

const todoList = document.querySelector(".todo-list");
const itemTpl = todoList.children[1];
todoList.innerHTML = "";

form.onsubmit = function (e) {
    e.preventDefault();
    const description = textInput.value;
    //TODO: check textInput.value non vuoto
    insertTodo(todos, description);
    // TODO: empty out textInput

    render(todoList, todos);
}

//1) createElement
//const li1 = document.createElement("li");
//li1.className = "todo-list-item done";
//todoList.appendChild(li1);

//const chk1 = document.createElement("input");
//hk1.type = "checkbox";
//chk1.className = "todo-list-item-done";
//chk1.checked = true;
//chk1.disabled = true;
//li1.appendChild(chk1);

//const span1 = document.createElement("span");
//span1.className = "todo-list-item-description";
//span1.textContent = "Learn programming";
//li1.appendChild(span1);

//2) cloneNode
/*const li1 = itemTpl.cloneNode(true);
li1.classList.add("done");
todoList.appendChild(li1);

const chk1 = li1.querySelector("input");
chk1.checked = true;
chk1.disabled = true;

const span1 = li1.querySelector("span");
span1.textContent = "Learn programming";

const li2 = itemTpl.cloneNode(true);
todoList.appendChild(li2);

const span2 = li2.querySelector("span");
span2.textContent = "Learn JavaScript";*/
