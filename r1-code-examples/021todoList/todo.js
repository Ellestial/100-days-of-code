// variables
var userInput;
var newTodoEl;
var newDeleteEl;
var newDescriptionEl;
var textContent;

// selecting elements
var todosBodyEl = document.querySelector('.todos__body');
var addEl = document.querySelector('.header__add');
var headerExpandEl = document.querySelector('.header__expand');
var headerContentEl = document.querySelector('.header__content');

// functions
function createTodo() {
  newTodoEl = document.createElement('div');
  newDeleteEl = document.createElement('button');
  newDescriptionEl = document.createElement('p');
  textContent = document.createTextNode(userInput);
  classesTodo();
  appendTodo();
}

function classesTodo() {
  newTodoEl.classList.add('todo');
  newDeleteEl.classList.add('todo__delete', 'far', 'fa-trash-alt');
  newDescriptionEl.classList.add('todo__description');
}

function appendTodo() {
  newTodoEl.appendChild(newDeleteEl);
  newDescriptionEl.appendChild(textContent);
  newTodoEl.appendChild(newDescriptionEl);
  todosBodyEl.appendChild(newTodoEl);
}

function removeTodo(e, duration) {
  var currentOpacity = 1;
  var currentTodo = e.target.parentNode;
  window.setInterval(function() {
    if(currentOpacity > 0) {
      currentOpacity -= 0.01;
      currentTodo.style.opacity = String(currentOpacity);
    }
  }, duration / 100);
  window.setTimeout(function() {
    currentTodo.remove();
  }, duration);
}

function slidingToggle() {
  var maxHeight = headerContentEl.scrollHeight;
  var currentHeight = maxHeight;
  headerContentEl.style.overflow = 'hidden';
  window.setInterval(function() {
    if(currentHeight > 0 && headerExpandEl.classList.contains('is--collapsed') === false) {
      currentHeight -= 3;
      headerContentEl.style.height = String(currentHeight) + 'px';
    } else if(currentHeight < maxHeight && headerExpandEl.classList.contains('is--collapsed')) {
      currentHeight += 3;
      headerContentEl.style.height = String(currentHeight) + 'px';
    }
  }, 10);
}

// event listeners
addEl.addEventListener('keypress', function(e) {
  if(e.which === 13) {
    userInput = this.value;
    createTodo();
    this.value = '';
  }
});

headerExpandEl.addEventListener('click', function() {
  var thisEl = this;
  slidingToggle();
  this.classList.toggle('is--collapsed');
});

todosBodyEl.addEventListener('click', function(e) {
  if(e.target.classList.contains('todo__description')) {
    e.target.classList.toggle('is--complete');
  } else if(e.target.classList.contains('todo__delete')) {
    removeTodo(e, 400);
  }
});
