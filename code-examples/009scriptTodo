var todos = [],
    userInput,
    newInput,
    removeTodo;

function newTodo() {
  newInput = prompt("What would you like to add?");
  todos.push(newInput);
  console.log(newInput + " added to the list.");
}

function listTodos() {
  console.log("**********");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function deleteTodo() {
  removeTodo = prompt("Which item would you like to delete? Please select an index.");
  console.log(todos.splice(removeTodo, 1) + " has been removed.");
}

userInput = prompt("What would you like to do? Please select 'new', 'list', 'undo', 'delete', or 'quit'."); 

while(userInput !== "quit") {

  if (userInput === "new") {
    newTodo();
  } else if (userInput === "list") {
    listTodos();
  } else if (userInput === "undo" && todos.length === 0) {
    alert("Sorry, you don't have any items to undo.");
  } else if (userInput === "undo" && todos.length > 0) {
    alert(todos.pop() + " has been removed.");
  } else if (userInput === "delete") {
    deleteTodo();
  }

  userInput = prompt("What would you like to do? Please select 'new', 'list', 'undo', 'delete', or 'quit'."); 
}
