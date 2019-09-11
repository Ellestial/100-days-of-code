/////////////////////////////
//  games view variables   //
/////////////////////////////
topicsData = JSON.parse(localStorage.topicsData);
activeTopic = JSON.parse(localStorage.activeTopic);
const topicName = document.querySelector('.nav__topic');
const navModes = document.querySelectorAll('.game');
const navMode = document.querySelector('.nav__games');
const gameContent = document.querySelector('.game__content');
const arrows = document.querySelector('.flashcards__arrows');
topicName.textContent = activeTopic.name;
let flashcardGame = {
  settings: {
    mode: 'study',
    number: 5
  },
  score: 0,
  active: 0,
  cards: []
};

function createFlashcardArr(num) {
  for(let i = 0; i < num; i++) {
    let rand = randomNum(0, num);
    while(flashcardGame.cards.includes(activeTopic.items[rand]) && flashcardGame.cards.length < activeTopic.items.length) {
      rand = randomNum(0, num);
    }
    while(activeTopic.items[rand] === undefined) {
      rand = randomNum(0, num);
    }
    flashcardGame.cards.push(activeTopic.items[rand]);
    createFlashcard(rand);
  }
};

function setupFlashcards(num) {
  createFlashcardArr(num);
  document.querySelector('.flashcard').classList.add('is--active');
};
setupFlashcards(flashcardGame.settings.number);

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
  flashcard.dataset.index = document.querySelectorAll('.flashcard').length;
  gameContent.appendChild(flashcard);
  return flashcard;
}

function flipFlashcard(e) {
  let activeCard = e.target.closest('.flashcard.is--active');
  if(activeCard.dataset.side === 'front') {
    activeCard.dataset.side = 'back';
  } else if(activeCard.dataset.side === 'back' && flashcardGame.settings.mode === 'study') {
    activeCard.dataset.side = 'front';
  };
};

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

function setActive(e) {
  let clickedArrow = e.target.closest('.flashcards__arrow');
  let active = document.querySelector('.flashcard.is--active');
  let index = Number(active.dataset.index);
  let flashcards = document.querySelectorAll('.flashcard');
  if(clickedArrow.classList.contains('arrow__prev') && index > 0) {
    active.classList.remove('is--active');
    flashcards[index - 1].classList.add('is--active');
    console.log('previous!');
  } else if(clickedArrow.classList.contains('arrow__next') && index < flashcardGame.settings.number - 1) {
    active.classList.remove('is--active');
    flashcards[index + 1].classList.add('is--active');
    console.log('next!');
  }
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

gameContent.addEventListener('click', flipFlashcard);
arrows.addEventListener('click', setActive);