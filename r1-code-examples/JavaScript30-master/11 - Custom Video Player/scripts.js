const video = document.querySelector('.player__video');
const play = document.querySelector('[title="Toggle Play"]');
const skips = document.querySelectorAll('[data-skip]');
const sliders = document.querySelectorAll('.player__slider');
const progressFilled = document.querySelector('.progress__filled');

// var setProgress = setInterval(function() {
//   progressFilled.style.flexBasis = String((video.currentTime / video.duration) * 100) + '%';
//   console.log(video.currentTime);
// }, 1000);

togglePlay = function() {
  if(video.paused) {
    video.play();
    play.textContent = '❚ ❚';
  } else {
    video.pause();
    play.textContent = '►';
  }
}

adjustSlider = function() {
  var currentEl = this.getAttribute('name');
  video[currentEl] = this.value;
}

skipMedia = function() {
  video.currentTime += Number(this.getAttribute('data-skip'));
}

play.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

document.querySelector('.progress').addEventListener('mousemove', function(e) {
  console.dir(e);
  progressFilled.style.flexBasis = String((e.offsetX / e.screenY) * 100) + '%';
});

skips.forEach(function(skip) {
  skip.addEventListener('click', skipMedia);
});

sliders.forEach(function(slider) {
  slider.addEventListener('mousemove', adjustSlider);
});