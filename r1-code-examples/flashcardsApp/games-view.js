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
let settingsOverlay;
let endOverlay;
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
    settingsOverlay = clone.querySelector('.games');
    const numbersEl = settingsOverlay.querySelectorAll('input[name="number"]');
    gameContent.appendChild(settingsOverlay);
    numbersEl.forEach(function(numberEl) {
      numberEl.max = activeTopic.items.length;
    });
    return settingsOverlay;
  },
  hide: function() {
    settingsShown = false;
    gameContent.removeChild(settingsOverlay);
  },
  show: function() {
    settingsShown = true;
    gameContent.appendChild(settingsOverlay);
  },
  randomizeItems: function() {
    let currentItems = game.items;
    let newItems = [];
    for(let i = 0; i < game.settings.number; i++) {
      let rand = randomNum(0, currentItems.length);
      let removedItem = currentItems.splice(rand, 1);
      newItems.push(removedItem);
    }
    game.items = newItems;
    console.table(currentItems, newItems);
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
};

const end = {
  create: function() {
    const template = document.querySelector('#gameEndTemplate');
    const clone = document.importNode(template.content, true);
    const selectAnotherGame = clone.querySelector('.end__different');
    selectAnotherGame.addEventListener('click', settings.show);
    endOverlay = clone.querySelector('.end__wrapper');
  },
  show: function(parentNode, showScore) {
    const scoreWrapper = endOverlay.querySelector('.end__score');
    const percentage = endOverlay.querySelector('.score__percentage');
    const fraction = endOverlay.querySelector('.score__fraction');
    if (showScore) {
      let scoreAmount = Math.floor((game.score / game.settings.number) * 100);
      percentage.textContent = scoreAmount + '%';
      fraction.textContent = game.score + '/' + game.settings.number;
      scoreWrapper.classList.remove('is--hidden');
    } else {
      scoreWrapper.classList.add('is--hidden');
    }
    parentNode.appendChild(endOverlay);
  },
  hide: function(parentNode) {
    parentNode.removeChild(endOverlay);
  }
};

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
end.create();

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
  setActive: function(clickedArrow) {
    const oldActive = document.querySelector('.flashcard.is--active');
    const flashcards = document.querySelectorAll('.flashcard');
    let newActive;
    if (clickedArrow) {
      arrows().setActive(clickedArrow);
    }
    newActive = flashcards[game.active];
    oldActive.classList.remove('is--active');
    oldActive.dataset.side = 'front';
    newActive.classList.add('is--active');
    setProgress(game);
  }
};

function arrows() {

  function create() {
    const template = document.querySelector('#' + game.selection + 'Template');
    const clone = document.importNode(template.content, true);
    const arrows = clone.querySelector('.flashcards__arrows');
    gameContent.appendChild(arrows);
    arrowsEl = arrows;
    checkDisabled();
  };

  function checkDisabled() {
    const prev = document.querySelector('.arrow__prev');
    const next = document.querySelector('.arrow__next');
    prev.classList.remove('is--disabled');
    next.classList.remove('is--disabled');
    if (game.active == 0) {
      prev.classList.add('is--disabled');
    } else if (game.active == game.settings.number) {
      next.classList.add('is--disabled');
    }
  };

  function setActive(arrow) {
    const max = game.settings.number;
    let isPrev = false;
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
  }

  return {
    create: create,
    checkDisabled: checkDisabled,
    setActive: setActive
  }
};

function setupFlashcards() {
  game.items.forEach(function(item, i) {
    flashcard.create(i);
  });
  if (game.settings.mode == 'study') {
    game.settings.number += 1;
    createEndFlashcard();
    arrows().create();
    arrowsEl.addEventListener('click', function(e) {
      const clickedArrow = e.target.closest('.flashcards__arrow');
      flashcard.setActive(clickedArrow);
      arrows().checkDisabled();
    });
  } else if (game.settings.mode == 'practice') {
    createButtons();
  }
  document.querySelector('.flashcard').classList.add('is--active');
  gameContent.addEventListener('click', flashcard.flip);

  function createEndFlashcard() {
    const restartGame = endOverlay.querySelector('.end__try-again');
    let newFlashcard = document.createElement('div');
    newFlashcard.classList.add('flashcard')
    newFlashcard.dataset.index = game.settings.number;
    end.show(newFlashcard);
    gameContent.appendChild(newFlashcard);
    restartGame.addEventListener('click', function() {
      game.active = 0;
      flashcard.setActive();
      arrows().checkDisabled();
    })
  };

  function createButtons() {
    const btnWrapper = document.createElement('div');
    const rightBtn = document.createElement('button');
    const wrongBtn = document.createElement('button');
    const restartGame = endOverlay.querySelector('.end__try-again');
    btnWrapper.classList.add('flashcard__btns');
    rightBtn.classList.add('btn__right', 'flashcard__btn', 'btn');
    rightBtn.textContent = 'I was right';
    wrongBtn.classList.add('btn__wrong', 'flashcard__btn', 'btn');
    wrongBtn.textContent = 'I was wrong';
    btnWrapper.appendChild(rightBtn);
    btnWrapper.appendChild(wrongBtn);
    gameContent.appendChild(btnWrapper);

    btnWrapper.addEventListener('click', function(e) {
      const clickedBtn = e.target.closest('.flashcard__btn');
      if (!clickedBtn) {
        return;
      }
      if(clickedBtn.classList.contains('btn__right')) {
        game.score += 1;
      }
      game.active += 1;
      if(game.active == game.settings.number) {
        end.show(gameContent, true);
      } else {
        flashcard.setActive();
      }
    });

    restartGame.addEventListener('click', function() {
      end.hide(gameContent);
      game.active = 0;
      game.score = 0;
      flashcard.setActive();
    })
  }
};

/////////////////////////////
//     event listeners     //
/////////////////////////////
settingsOverlay.addEventListener('click', function(e) {
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