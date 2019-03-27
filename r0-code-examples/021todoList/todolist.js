var todoArr = [];
var newTodo;

$("input").keypress(function(event) {
  if(event.which === 13) {
    todoArr.push($(this).val());
    newTodo = todoArr[todoArr.length - 1];
    $("li:first-child").clone().appendTo($("#created-holder")).removeClass("placeholder");
    $("li:last-child p").text(newTodo);
    $(this).val('');
  }
});

$("#created-holder").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("#created-holder").on("click", ".delete", function() {
  $(this).parent().addClass("completed");
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
});

$("#add").on("click", function() {
  $(this).toggleClass("closed");
  $("input").slideToggle(500);
});
