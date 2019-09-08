/////////////////////////////
//  games view variables   //
/////////////////////////////
topicsData = JSON.parse(localStorage.topicsData);
activeTopic = JSON.parse(localStorage.activeTopic);
const topicName = document.querySelector('.nav__topic');
const navModes = document.querySelectorAll('.game');
const navMode = document.querySelector('.nav__games');
topicName.textContent = activeTopic.name;

/////////////////////////////
//         objects         //
/////////////////////////////

/////////////////////////////
//        functions        //
/////////////////////////////
function setMode(clickedMode = 'flashcards') {
  activeTopic.mode = clickedMode.dataset.mode;

  let activeMode = activeTopic.mode;

  navModes.forEach(function(mode) {
    if(activeMode == mode.dataset.mode) {
      mode.classList.add('is--active');
    } else if (activeMode !== mode.dataset.mode && mode.classList.contains('is--active')) {
      mode.classList.remove('is--active');
    }
  });
}

setMode();

/////////////////////////////
//     event listeners     //
/////////////////////////////
navMode.addEventListener('click', function(e) {
  let clickedMode = e.target.closest('.game');
  clickedMode.classList.add('is--active');
  console.log(clickedMode);
});

