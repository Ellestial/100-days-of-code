var todoText;

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    todoText = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash-o'></i></span>" + todoText + "</li>");
    $(this).val('');
  }
});

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "li span", function(event) {
  $(this).parent().addClass("completed");
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$(".fa-plus").on("click", function() {
  $("input").fadeToggle(300);
});
