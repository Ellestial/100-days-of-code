// things done in DOM

// JQUERY
$("li").css("background", "blue");
// JAVASCRIPT
document.querySelector("li").style.background = "blue"; // JS

// JQUERY can pull in objects of styles with .css()
var someStyles = {
  backgroundColor: "red",
  border: "2px solid orange",
  fontSize: "55px"
};
$("ul").css(someStyles); // this applies all the above styles; could also have anonymous object here
// JAVASCRIPT
document.querySelector("ul").style.backgroundColor = "red";
document.querySelector("ul").style.border = "2px solid orange";
document.querySelector("ul").style.fontSize = "55px";

// JQUERY can loop through all of class/selectors with one line
$("li").css("background", "blue"); // for 3 li selectors
// JAVASCRIPT
var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
  lis[i].style.background = "blue";
}
