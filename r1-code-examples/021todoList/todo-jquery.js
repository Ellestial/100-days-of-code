// variables
var userInput;

// functions
function createTodo() {
  $('.todos__body').append('<div class="todo">');
  $('.todo:last-child').append('<button class="todo__delete far fa-trash-alt">', '<p class="todo__description">' + userInput + '</p>');
}

// event listeners
$('.header__expand').on('click', function() {
  $('.header__content').slideToggle(300);
  $(this).toggleClass('is--collapsed');
});

$('.header__add').on('keypress', function(e) {
  if(e.which === 13) {
      userInput = $(this).val();
      createTodo();
      $(this).val('');
  }
});

$('.todos').on('click', '.todo__delete', function(e) {
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
});

$('.todos').on('click', '.todo__description', function() {
  $(this).toggleClass('is--complete');
});