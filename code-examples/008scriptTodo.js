function toDo() {
  var todos = [];

  while(userInput !== "quit") {
  var userInput = prompt("What would you like to do? Please select 'new', 'list', 'delete', or 'quit'.");
    
    if (userInput === "new") {
      var newTodo = prompt("What would you like to add?");
      todos.push(newTodo);
    } else if (userInput === "list") {
      console.log(todos);
    } else if (userInput === "delete") {
      alert(todos.pop() + " has been removed.");
    }
  }
}

toDo();
