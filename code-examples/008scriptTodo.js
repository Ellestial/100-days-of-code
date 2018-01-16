function toDo() {
  var todos = [],
      userInput,
      newTodo;

  while(userInput !== "quit") {
  userInput = prompt("What would you like to do? Please select 'new', 'list', 'undo', or 'quit'.");
    
    if (userInput === "new") {
      newTodo = prompt("What would you like to add?");
      todos.push(newTodo);
    } else if (userInput === "list") {
      console.log(todos);
    } else if (userInput === "undo" && todos.length === 0) {
      alert("Sorry, you don't have any items to undo.");
    } else if (userInput === "undo" && todos.length > 0) {
      alert(todos.pop() + " has been removed.");
    }
  }
}

toDo();
