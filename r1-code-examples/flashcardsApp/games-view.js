/////////////////////////////
//  games view variables   //
/////////////////////////////
topicsData = JSON.parse(localStorage.topicsData);
activeTopic = JSON.parse(localStorage.activeTopic);
const topicName = document.querySelector('.nav__topic');
const navModes = document.querySelectorAll('.game');
const gameContent = document.querySelector('.game__content');
const progress = document.querySelector('.progress__fill');
let selectGame;
topicName.textContent = activeTopic.name;
let settingsShown = true;

let game = {
  selection: 'flashcards',
  settings: {
    mode: 'study',
    sideA: 'term',
    sideB: 'definition',
    number: 15
  },
  score: 0,
  active: 0,
  items: []
};

/////////////////////////////
//  games view functions   //
/////////////////////////////
function setProgress(game) {
  progress.style.width = Math.floor((game.active / game.settings.number) * 100) + '%';
}

const settings = {
  create: function() {
    const template = document.querySelector('#gameSettingsTemplate');
    const clone = document.importNode(template.content, true);
    const games = clone.querySelector('.games');
    gameContent.appendChild(games);
    selectGame = games;
    return games;
  },
  hide: function() {
    gameContent.removeChild(selectGame);
  },
  setFlashcards: function() {
    game.selection = 'flashcards',
    game.settings = {
      number: 15,
      mode: 'study',
      sideA: 'term',
      sideB: 'definition'
    }
  },
  setMatching: function() {
    game.selection = 'matching',
    game.settings = {
      number: 15,
      type: []
    }
  },
  setTest: function() {
    game.selection = 'test',
    game.settings = {
      number: 15,
      style: [],
      type: []
    }
  }
}

settings.create();

/////////////////////////////
//   flashcard variables   //
/////////////////////////////
const arrows = document.querySelector('.flashcards__arrows');
let flashcardGame = {
  settings: {
    mode: 'study',
    sideA: 'term',
    sideB: 'definition',
    number: 15
  },
  score: 0,
  active: 0,
  cards: []
};

/////////////////////////////
//         objects         //
/////////////////////////////
const flashcard = {
  create: function(index) {
    const template = document.querySelector('#flashcardTemplate');
    const clone = document.importNode(template.content, true);
    const flashcard = clone.querySelector('.flashcard');
    const front = flashcard.querySelector('.front__text');
    const back = flashcard.querySelector('.back__text');
    const item = activeTopic.items[index];
    const sideA = flashcardGame.settings.sideA;
    const sideB = flashcardGame.settings.sideB;
    front.textContent = item[sideA];
    back.textContent = item[sideB];
    flashcard.dataset.index = document.querySelectorAll('.flashcard').length;
    gameContent.appendChild(flashcard);
    return flashcard;
  },
  flip: function(card) {
    let activeCard = card.target.closest('.flashcard.is--active');
    if(activeCard.dataset.side === 'front') {
      activeCard.dataset.side = 'back';
    } else if(activeCard.dataset.side === 'back' && flashcardGame.settings.mode === 'study') {
      activeCard.dataset.side = 'front';
    };
  },
  setActive: function(arrow) {
    const oldActive = document.querySelector('.flashcard.is--active');
    let i = Number(oldActive.dataset.index);
    const max = flashcardGame.settings.number - 1;
    const flashcards = document.querySelectorAll('.flashcard');
    const arrows = document.querySelectorAll('.flashcard__arrow');
    let isPrev = false;
    let newActive;
    if (arrow.classList.contains('arrow__prev')) {
      isPrev = true;
    }
    if (i < 1 && isPrev || i >= max && !isPrev) {
      return;
    };
    if (isPrev) {
      i--;
    } else {
      i++;
    };
    setArrows();
    newActive = flashcards[i];
    flashcardGame.active = i;
    oldActive.classList.remove('is--active');
    oldActive.dataset.side = 'front';
    newActive.classList.add('is--active');

    function setArrows() {
      if(isPrev && i == 0 || !isPrev && i == max) {
        arrow.classList.add('is--disabled');
      } else if (arrow.classList.contains('is--disabled')) {
        arrow.classList.remove('is--disabled');
      };
      if (arrow == null) {
        return;
      }
    };
    setProgress(flashcardGame);
  }
};

/////////////////////////////
//        functions        //
/////////////////////////////

function setupFlashcards(num) {
  for(var i = 0; i < num; i++) {
    let rand = randomNum(0, num);
    while(flashcardGame.cards.includes(activeTopic.items[rand]) && flashcardGame.cards.length < activeTopic.items.length) {
      rand = randomNum(0, num);
    }
    while(activeTopic.items[rand] === undefined) {
      rand = randomNum(0, num);
    }
    flashcardGame.cards.push(activeTopic.items[rand]);
    flashcard.create(rand);
  }
  document.querySelector('.flashcard').classList.add('is--active');
};
// setupFlashcards(flashcardGame.settings.number);

/////////////////////////////
//     event listeners     //
/////////////////////////////
// gameContent.addEventListener('click', flashcard.flip);
// arrows.addEventListener('click', function(e) {
//   const clickedArrow = e.target.closest('.flashcards__arrow');
//   flashcard.setActive(clickedArrow);
// });
selectGame.addEventListener('click', function(e) {
  const clickedGame = e.target.closest('.game');
  const clickedButton = e.target.closest('.game__start');
  const games = document.querySelectorAll('.game');
  games.forEach(function(game) {
    if(game.classList.contains('is--active')) {
      game.classList.remove('is--active');
    }
  });
  clickedGame.classList.add('is--active');

  if (clickedButton) {
    game.selection = clickedGame.dataset.selection;
    console.log('you clicked button!');
  }
});

if (settingsShown) {
  console.log('beep!');
};