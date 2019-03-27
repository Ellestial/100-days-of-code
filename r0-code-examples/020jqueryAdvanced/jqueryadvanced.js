$("h1").click(function() {
  alert("you clicked the h1");
});

$("button:not(#animate)").click(function() {
  alert("you clicked a button");
});

var testInput;

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    $(this).val('');
  }
  return testInput = $(this).val();
});

console.log(testInput);

$("button").on("click", function() {
  $("input").val("what");
});

$("#animate").on("click", function() {
  $("div").fadeOut(500, function() {
    console.log("fade complete!");
    $(this).remove();
  });
});
