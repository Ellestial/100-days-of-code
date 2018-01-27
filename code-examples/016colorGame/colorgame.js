var colorBlock = document.querySelectorAll(".color-block");
var colorHolder = document.querySelector(".color-holder");
var colorsArr = [];
var modeEasy = document.querySelector("#mode-easy");
var modeHard = document.querySelector("#mode-hard");
var newQuestion = document.querySelector("#new-color");
var questionDisplay = document.querySelector("strong");
var correctRGB;
var modeEasyActive = false;
var modeHardActive = true;
var answerCorrect = false;

function colorBlockCount(count) {
  if(colorBlock.length < count) {
    for(var i = colorBlock.length; i < count; i++) {
      var newBlock = colorBlock[0].cloneNode(true);
      colorHolder.appendChild(newBlock);
    }
  } else {
    for(var j = count; j < colorBlock.length; j++) {
      colorBlock[j].remove();
    }
  }
  colorBlock = document.querySelectorAll(".color-block");
};
colorBlockCount(6);

function randomRGB() {
  var valueMax = 255;
  var valueMin = 0;
  return Math.floor(Math.random() * (valueMax - valueMin + 1) + valueMin);
};

function randomRGBCorrect() {
  var randomIndex = Math.floor(Math.random() * Math.floor(colorBlock.length));
  correctRGB = colorBlock[randomIndex];
  questionDisplay.textContent = correctRGB.style.backgroundColor;
};

function colorValue() {
  for(var i = 0; i < colorBlock.length; i++) {
    colorsArr[i] = "rgb(" + randomRGB() + ", " + randomRGB() + ", " + randomRGB() + ")";
    colorBlock[i].style.backgroundColor = colorsArr[i];
  }
  randomRGBCorrect();
};
colorValue();

function isCorrect() {
  if(answerCorrect === false) {
    correctRGB.classList.add("correct");
    for(var j = 0; j < colorBlock.length; j++) {
      colorBlock[j].style.backgroundColor = correctRGB.style.backgroundColor;
      colorBlock[j].classList.add("disabled");
      colorBlock[j].classList.remove("incorrect");
    }
  document.querySelector("h4").innerHTML = "That is correct!";
  modeEasy.classList.add("disabled");
  modeHard.classList.add("disabled");
  document.querySelector("h1").style.backgroundColor = correctRGB.style.backgroundColor;
  answerCorrect = true;
  }
};

function selection() {
  for(var i = 0; i < colorBlock.length; i++) {
    colorBlock[i].addEventListener("click", function(i) {
      return function() {
        if (colorBlock[i] !== correctRGB && answerCorrect === false) {
          colorBlock[i].classList.add("incorrect");
          document.querySelector("h4").innerHTML = "That is not right, try again.";
        } else {
          isCorrect();
        }
      }
    }(i));
  }
}

selection();

function resetColorBlock() {
  answerCorrect = false;
  for(var i = 0; i < colorBlock.length; i++) {
    colorBlock[i].classList.remove("disabled");
    colorBlock[i].classList.remove("incorrect");
    colorBlock[i].classList.remove("correct");
  }
  document.querySelector("h1").style.backgroundColor = "";
  document.querySelector("h4").innerHTML = "";
  colorValue();
  selection();
};

modeEasy.addEventListener("click", function() {

  if(!modeEasyActive && answerCorrect === false) {
    colorBlockCount(3);
    resetColorBlock();
    this.classList.add("active");
    modeEasyActive = true;
    modeHardActive = false;
    modeHard.classList.remove("active");
  }
});

modeHard.addEventListener("click", function() {

  if(!modeHardActive && answerCorrect === false) {
    colorBlockCount(6);
    resetColorBlock();
    this.classList.add("active");
    modeHardActive = true;
    modeEasyActive = false;
    modeEasy.classList.remove("active");
  }
});

newQuestion.addEventListener("click", function() {
  resetColorBlock();
});
