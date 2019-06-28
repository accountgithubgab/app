Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@accountgithubgab 
0
0 0 accountgithubgab/cursojs
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Security  Insights  Settings
cursojs/Mod3/Aula6/todos.js
 unknown cursojs mod 3
bff28ca yesterday
54 lines (37 sloc)  1.26 KB
    
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemet = document.createElement('a');

        linkElemet.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElemet.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElemet.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemet);

        listElement.appendChild(todoElement);
    }
};

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
