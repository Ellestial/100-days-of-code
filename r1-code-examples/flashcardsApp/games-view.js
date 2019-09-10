/////////////////////////////
//  games view variables   //
/////////////////////////////
topicsData = JSON.parse(localStorage.topicsData);
activeTopic = JSON.parse(localStorage.activeTopic);
const topicName = document.querySelector('.nav__topic');
const navModes = document.querySelectorAll('.game');
const navMode = document.querySelector('.nav__games');
const gameContent = document.querySelector('.game__content');
topicName.textContent = activeTopic.name;

/////////////////////////////
//         objects         //
/////////////////////////////

function createFlashcard(index) {
  const template = document.querySelector('#flashcardTemplate');
  const clone = document.importNode(template.content, true);
  const flashcard = clone.querySelector('.flashcard');
  const front = flashcard.querySelector('.front__text');
  const back = flashcard.querySelector('.back__text');
  const item = activeTopic.items[index];
  front.textContent = item.term;
  back.textContent = item.definition;
  gameContent.appendChild(flashcard);
  return flashcard;
}
createFlashcard(1);

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

/////////////////////////////
//        flashcards       //
/////////////////////////////

/////////////////////////////
//     event listeners     //
/////////////////////////////
navMode.addEventListener('click', function(e) {
  let clickedMode = e.target.closest('.game');
  clickedMode.classList.add('is--active');
  console.log(clickedMode);
});

