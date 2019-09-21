/////////////////////////////
//  games view variables   //
/////////////////////////////
topicsData = JSON.parse(localStorage.topicsData);
activeTopic = JSON.parse(localStorage.activeTopic);
const topicName = document.querySelector('.nav__topic');
const gameContent = document.querySelector('.game__content');
const progress = document.querySelector('.progress__fill');
const settingsBtn = document.querySelector('.settings');
let arrowsEl;
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
  progress.style.width = Math.floor((game.active / (game.settings.number - 1)) * 100) + '%';
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

function setupNewGame(game) {
  const clickedGame = game;
  settings.hide();
  while (gameContent.firstChild) {
    gameContent.removeChild(gameContent.firstChild);
  }
  progress.style.width = '0%';
  settings.set(clickedGame);
  settings.addItems();
};

settings.create();

/////////////////////////////
//      flashcard game     //
/////////////////////////////
const flashcard = {
  create: function(index) {
    const template = document.querySelector('#flashcardsTemplate');
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
  },
  flip: function(e) {
    let activeCard = e.target.closest('.flashcard.is--active');
    if (activeCard == null) {
      return;
    }
    if (activeCard.dataset.side === 'front') {
      activeCard.dataset.side = 'back';
    } else if (activeCard.dataset.side === 'back') {
      activeCard.dataset.side = 'front';
    };
  },
  setActive: function(arrow) {
    const oldActive = document.querySelector('.flashcard.is--active');
    const max = game.settings.number - 1;
    const flashcards = document.querySelectorAll('.flashcard');
    let isPrev = false;
    let newActive;
    if (arrow.classList.contains('arrow__prev')) {
      isPrev = true;
    }
    if (game.active < 1 && isPrev || game.active >= max && !isPrev) {
      return;
    };
    if (isPrev) {
      game.active -= 1;
    } else {
      game.active += 1;
    };
    newActive = flashcards[game.active];
    oldActive.classList.remove('is--active');
    oldActive.dataset.side = 'front';
    newActive.classList.add('is--active');
    setProgress(game);
  }
};

function arrows() {
  let prev;
  let next;

  function create() {
    const template = document.querySelector('#' + game.selection + 'Template');
    const clone = document.importNode(template.content, true);
    const arrows = clone.querySelector('.flashcards__arrows');
    gameContent.appendChild(arrows);
    arrowsEl = arrows;
    prev = document.querySelector('.arrow__prev');
    next = document.querySelector('.arrow__next');
    console.log(prev);
    checkDisabled();
  };

  function checkDisabled() {
    console.log(prev);
    if(game.active == 0) {
      prev.classList.add('is--disabled');
    } else if (game.active == game.settings.number - 1) {
      next.classList.add('is--disabled');
    } else {
      prev.classList.remove('is--disabled');
      next.classList.remove('is--disabled');
    }
  };

  return {
    create: create,
    checkDisabled: checkDisabled
  }
};

function setupFlashcards() {
  game.items.forEach(function(item, i) {
    flashcard.create(i);
  });
  document.querySelector('.flashcard').classList.add('is--active');
  arrows().create();
  gameContent.addEventListener('click', flashcard.flip);
  arrowsEl.addEventListener('click', function(e) {
    const clickedArrow = e.target.closest('.flashcards__arrow');
    flashcard.setActive(clickedArrow);
    arrows().checkDisabled();
  });
};

/////////////////////////////
//     event listeners     //
/////////////////////////////
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
    setupNewGame(clickedGame);
    if (game.selection == 'flashcards') {
      setupFlashcards();
    } else if (game.selection == 'matching') {
      // setupMatching();
    } else if (game.selection == 'test') {
      // setupTest();
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