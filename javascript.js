function addTodo() {
    var gettingTodos = document.getElementById("todosHere").value;
    if (gettingTodos) {
        // console.log(gettingTodos, "gettingTodos");
        myTodosFromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        myTodosFromLS.push(gettingTodos);
        console.log(myTodosFromLS, "myTodosFromLS")
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS))
        document.getElementById("todosHere").value = "";
        cs();
        alert("Todo added!");
    }
    else {
        alert("add to do first, before submitting!");
    }
}
// ek variable lekar usme addtodo ko dala phir add hone par alert diya.

function cs(){
var divFromHtml = document.getElementById("displayTodos")

var gettingTodosFromLS = JSON.parse(localStorage.getItem("Todos"));
console.log(gettingTodosFromLS, "gettingTodosFromLS");
var finalStructure = []

for (var i = 0; i < gettingTodosFromLS.length; i++) {
    finalStructure += `<div id ="row">
    <p>${gettingTodosFromLS[i]}</p>
    <i onclick="deleteTodo(${i})" class="fa-solid fa-trash"></i>
    </div>`

}
divFromHtml.innerHTML = finalStructure;
}
cs();
    
function deleteTodo(todoIndex) {
    console.log(todoIndex);
    var todosFromLS = JSON.parse(localStorage.getItem("Todos"));
    // local storage se todos ko bahar nikala


    todosFromLS.splice(todoIndex,1)
    localStorage.setItem('Todos', JSON.stringify(todosFromLS))
    cs();
}
// console.log(finalStructure,"finalStructure")