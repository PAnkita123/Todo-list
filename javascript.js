function addtodo(){
    var getTodo = document.getElementById('todos').value;
    if (getTodo){
        var myTodoFromLS =JSON.parse(localStorage.getItem("Todo")) || [];
        myTodoFromLS.push(getTodo);
        localStorage.setItem("Todo",JSON.stringify(myTodoFromLS));
        Document.getElementById("todos").value="";
        alert('Task added successfully!');

    }
    else{
        alert('Please add task first before submission!');
    }
}

function display(){
    var mainDiv = document.getElementById("displayTodos");
    var div =document.createElement("div");
    var h1 = document.createElement("h1");
    h1.innerText="structure created!"
    h1.style.color="Red";
    div.append(h1);
    // var h1sec = document.createElement("h1");
    // h1sec.innerText="Hello world!";
    // h1sec.style.color="Blue";
    // div.append(h1sec);
    mainDiv.append(div);
}
