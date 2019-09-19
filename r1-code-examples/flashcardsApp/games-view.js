/////////////////////////////
//  games view variables   //
/////////////////////////////
topicsData = JSON.parse(localStorage.topicsData);
activeTopic = JSON.parse(localStorage.activeTopic);
const topicName = document.querySelector('.nav__topic');
const gameContent = document.querySelector('.game__content');
const progress = document.querySelector('.progress__fill');
const settingsBtn = document.querySelector('.settings');
let gamesOverlay;
let settingsShown = true;
let game = {
  selection: '',
  settings: {},
  score: 0,
  active: 0,
  items: []
};

topicName.textContent = activeTopic.name;

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
    gamesOverlay = clone.querySelector('.games');
    const numbersEl = gamesOverlay.querySelectorAll('input[name="number"]');
    gameContent.appendChild(gamesOverlay);
    numbersEl.forEach(function(numberEl) {
      numberEl.max = activeTopic.items.length;
    });
    return gamesOverlay;
  },
  hide: function() {
    settingsShown = false;
    gameContent.removeChild(gamesOverlay);
  },
  show: function() {
    settingsShown = true;
    gameContent.appendChild(gamesOverlay);
  },
  set: function(selectedGame) {
    game.selection = selectedGame.dataset.selection;
    game.score = 0;
    game.active = 0;
    game.items = [];
    const numberEl = selectedGame.querySelector('input[name="number"]');
    if (game.selection == 'flashcards') {
      setFlashcards();
    } else if (game.selection == 'matching') {
      setMatching();
    } else if (game.selection == 'test') {
      setTest();
    }
    
    function setFlashcards() {
      const modeEls = selectedGame.querySelectorAll('[name="mode"]');
      const sideAEl = selectedGame.querySelector('[name="sideA"]');
      const sideBEl = selectedGame.querySelector('[name="sideB"]');
      game.settings = {
        number: Number(numberEl.value),
        sideA: sideAEl.value.toLowerCase(),
        sideB: sideBEl.value.toLowerCase()
      }
      modeEls.forEach(function(modeEl) {
        if (modeEl.checked) {
          game.settings.mode = modeEl.value;
        }
      });
    };

    function setMatching() {
      const typeEls = selectedGame.querySelectorAll('[name="type"]');
      game.settings = {
        number: Number(numberEl.value),
        type: []
      }
      typeEls.forEach(function(typeEl) {
        if (typeEl.checked) {
          game.settings.type.push(typeEl.value);
        }
      });
    };

    function setTest() {
      const styleEls = selectedGame.querySelectorAll('[name="style"]');
      const typeEls = selectedGame.querySelectorAll('[name="type"]');
      game.settings = {
        number: Number(numberEl.value),
        style: [],
        type: []
      }
      styleEls.forEach(function(styleEl) {
        if (styleEl.checked) {
          game.settings.style.push(styleEl.value);
        }
      });
      typeEls.forEach(function(typeEl) {
        if (typeEl.checked) {
          game.settings.type.push(typeEl.value);
        }
      });
    };
  },
  addItems: function() {
    let num = game.settings.number;
    for(var i = 0; i < num; i++) {
      let rand = randomNum(0, num);
      while(game.items.includes(activeTopic.items[rand]) && game.items.length < activeTopic.items.length) {
        rand = randomNum(0, num);
      }
      while(activeTopic.items[rand] === undefined) {
        rand = randomNum(0, num);
      }
      game.items.push(activeTopic.items[rand]);
    }
  }
}

settings.create();

/////////////////////////////
//   flashcard variables   //
/////////////////////////////
const arrows = document.querySelector('.flashcards__arrows');

/////////////////////////////
//         objects         //
/////////////////////////////
function flashcardTest() {
  const template = document.querySelector('#flashcardTemplate');
  const clone = document.importNode(template.content, true);
  const flashcard = clone.querySelector('.flashcard');
  const arrows = clone.querySelector('.flashcards__arrows');
  console.log(arrows);

  function create(index) {
    const front = flashcard.querySelector('.front__text');
    const back = flashcard.querySelector('.back__text');
    const item = activeTopic.items[index];
    const sideA = game.settings.sideA;
    const sideB = game.settings.sideB;
    front.textContent = item[sideA];
    back.textContent = item[sideB];
    flashcard.dataset.index = document.querySelectorAll('.flashcard').length;
    gameContent.appendChild(flashcard);
    return flashcard;
  };
  function flip(card) {
    let activeCard = card.target.closest('.flashcard.is--active');
    if(activeCard.dataset.side === 'front') {
      activeCard.dataset.side = 'back';
    } else if(activeCard.dataset.side === 'back' && game.settings.mode === 'study') {
      activeCard.dataset.side = 'front';
    };
  }
  return {
    create: create,
    flip: flip
  }
}
const flashcard = {
  create: function(index) {
    const template = document.querySelector('#flashcardTemplate');
    const clone = document.importNode(template.content, true);
    const flashcard = clone.querySelector('.flashcard');
    const front = flashcard.querySelector('.front__text');
    const back = flashcard.querySelector('.back__text');
    const item = game.items[index];
    const sideA = game.settings.sideA;
    const sideB = game.settings.sideB;
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
    } else if(activeCard.dataset.side === 'back' && game.settings.mode === 'study') {
      activeCard.dataset.side = 'front';
    };
  },
  setActive: function(arrow) {
    const oldActive = document.querySelector('.flashcard.is--active');
    let i = Number(oldActive.dataset.index);
    const max = game.settings.number - 1;
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
    game.active = i + 1;
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
    setProgress(game);
  }
};

/////////////////////////////
//        functions        //
/////////////////////////////

function setupFlashcards() {
  game.items.forEach(function(item, i) {
    flashcard.create(i);
  });
  const template = document.querySelector('#flashcardTemplate');
  const clone = document.importNode(template.content, true);
  const arrows = clone.querySelector('.flashcards__arrows');
  console.log(arrows);
  gameContent.appendChild(arrows);
  document.querySelector('.flashcard').classList.add('is--active');
  arrows.addEventListener('click', function(e) {
    const clickedArrow = e.target.closest('.flashcards__arrow');
    flashcard.setActive(clickedArrow);
  });
};

/////////////////////////////
//     event listeners     //
/////////////////////////////
// 
// arrows.addEventListener('click', function(e) {
//   const clickedArrow = e.target.closest('.flashcards__arrow');
//   flashcard.setActive(clickedArrow);
// });
gamesOverlay.addEventListener('click', function(e) {
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
    settings.hide();
    while (gameContent.firstChild) {
      gameContent.removeChild(gameContent.firstChild);
    }
    settings.set(clickedGame);
    settings.addItems();
    if (game.selection == 'flashcards') {
      setupFlashcards();
      gameContent.addEventListener('click', flashcard.flip);
    }
  }
});

settingsBtn.addEventListener('click', function() {
  if (this.classList.contains('is--disabled')) {
    return;
  }
  if (settingsShown) {
    settings.hide();
  } else {
    settings.show();
  }
});