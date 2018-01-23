var p1Btn = document.querySelector("#p1"),
  p2Btn = document.querySelector("#p2"),
  p1Score = 0,
  p2Score = 0,
  p1Display = document.querySelector("#p1Display"),
  p2Display = document.querySelector("#p2Display"),
  resetBtn = document.querySelector("#reset"),
  numInput = document.querySelector("input[type='number']"),
  maxScoreDisplay = document.querySelector("p span"),
  maxScore = 5,
  gameOver = false;

numInput.addEventListener("input", function() {
  maxScoreDisplay.textContent = this.value;
  maxScore = Number(this.value);
  reset();
});

p1Btn.addEventListener("click", function() {
  if(!gameOver) {
    p1Score++;
    if(p1Score === maxScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
  }
  p1Display.textContent = p1Score;
});

p2Btn.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    if(p2Score === maxScore) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
  }
  p2Display.textContent = p2Score;
});

resetBtn.addEventListener("click", function() {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
