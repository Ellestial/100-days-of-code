/////////////////////////////////
//       global variables      //
/////////////////////////////////

const overlayEl = document.querySelector('.overlay__wrapper');
const settingsEl = document.querySelector('.heading__settings');
const settingDeckEl = document.querySelector('.setting__deck');
const settingMatchesLeftEl = document.querySelector('.matches__num');
const settingSpellsEarnedEl = document.querySelector('.spells__num');
const numCards = 6;
const duration = 15;
let spellOverlayEl;
let outroOverlayEl;
let characterData;
let spellData;
let collectedSpells = [];
let remainingMatches = numCards / 2;
let activeDeck = {};
const deckList = [
  {deck: 'deathEater', title: 'Death Eater'},
  {deck: 'dumbledoresArmy', title: 'Dumbledore\'s Army'}, 
  {deck: 'ministryOfMagic', title: 'Ministry of Magic'}, 
  {deck: 'orderOfThePhoenix', title: 'Order of the Phoenix'},
  {deck: 'all', title: 'All Characters'}];

/////////////////////////////////
//    onload/IIFE functions    //
/////////////////////////////////
(function createDecks(decks) {
  let decksEl = document.querySelector('.game__decks');
  let deckEl = document.querySelector('.deck');
  decksEl.removeChild(deckEl);

  decks.forEach(function(deck) {
    let clone = deckEl.cloneNode(true);
    clone.dataset.deck = deck.deck;
    clone.dataset.title = deck.title;
    clone.querySelector('.deck__icon').src = `./assets/deck.svg`;
    clone.querySelector('.deck__title').textContent = deck.title;
    decksEl.appendChild(clone);
  });
})(deckList);

(function createCards() {
  let cardsEl = document.querySelector('.game__cards');
  let cardEl = document.querySelector('.card');
  cardsEl.removeChild(cardEl);

  for(let i = 0; i < numCards; i++) {
    let clone = cardEl.cloneNode(true);
    clone.dataset.index = i;
    cardsEl.appendChild(clone);
  }
})();

/////////////////////////////////
// multi-use general functions //
/////////////////////////////////
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function showState(state) {
  let allStates = document.querySelectorAll('[data-state]')
  allStates.forEach(function(currentState) {
    currentState.classList.add('is--hidden');
    if(currentState.dataset.state === state) {
      currentState.classList.remove('is--hidden');
    }
  })
};

function shuffle(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let firstEl = arr[i];
    let secondIndex = randomNum(0, arr.length - 1);
    arr[i] = arr[secondIndex];
    arr[secondIndex] = firstEl;
  }
  return arr;
};
  
function randomPotterItem(dataArr, usableArr, title) {
  let newRandomItem = dataArr[randomNum(0, dataArr.length - 1)];
  let duplicate = false;

  usableArr.forEach(function(arrItem) {
    if(arrItem[title] === newRandomItem[title]) {
      return duplicate = true;
    }
  });
  if(duplicate) {
    return randomPotterItem(dataArr, usableArr, title);
  }
  return newRandomItem;
};

function resetGame() {
  activeDeck = {};
  collectedSpells = [];
  remainingMatches = numCards / 2;
  settingMatchesLeftEl.textContent = remainingMatches;
  settingSpellsEarnedEl.textContent = 0;
  overlayEl.textContent = '';
  timer().reset();
  showState('intro');

  document.querySelectorAll('.game__cards .card').forEach(function(card) {
    card.classList.remove('is--completed');
  });

  document.querySelectorAll('.deck').forEach(function(deck) {
    deck.addEventListener('click', beginGame);
  });
};

/////////////////////////////////
//        game functions       //
/////////////////////////////////

function beginGame() {
  activeDeck.title = this.dataset.title;
  activeDeck.deck = this.dataset.deck;
  if(activeDeck.deck !== 'all') {
    activeDeck.characters = characterData.filter(function(character) {
      return character[activeDeck.deck] == true;
    })
  } else {
    activeDeck.characters = characterData;
  }
  settingDeckEl.textContent = `${activeDeck.title} Deck`;
  grabRandomCharacters();
  showState('game');
  timer().begin(duration);
  
  function grabRandomCharacters() {
    let cards = [];
    for(let i = 0; i < numCards / 2; i++) {
      let card = randomPotterItem(activeDeck.characters, cards, 'name');
      cards.push(card, card);
    }
    activeDeck.cards = shuffle(cards);
  };
};

let lastSelection;
let lastIndex;
let cardsFlipped = 0;

function flipCard() {
  let thisSelection = this;
  let thisIndex = thisSelection.dataset.index;
  cardsFlipped++;
  if(thisSelection === lastSelection) {
    return;
  } else if(cardsFlipped > 2) {
    cardsFlipped--;
    return;
  }

  thisSelection.classList.add('is--flipped');
  thisSelection.querySelector('.card__name').textContent = activeDeck.cards[thisIndex].name;
  thisSelection.querySelector('.card__blood').textContent = activeDeck.cards[thisIndex].bloodStatus;

  if(cardsFlipped === 2 && lastIndex !== thisIndex) {
    return checkMatch();
  }

  lastSelection = thisSelection;
  lastIndex = thisIndex;

  function checkMatch() {
    if(activeDeck.cards[lastIndex] === activeDeck.cards[thisIndex]) {
      lastSelection.classList.add('is--completed');
      thisSelection.classList.add('is--completed');
      populateSpellOverlay();
    }
    setTimeout(function() {
      lastSelection.querySelector('.card__name').textContent = '';
      lastSelection.querySelector('.card__blood').textContent = '';
      lastSelection.classList.remove('is--flipped');
      thisSelection.querySelector('.card__name').textContent = '';
      thisSelection.querySelector('.card__blood').textContent = '';
      thisSelection.classList.remove('is--flipped');
      lastSelection = '';
      lastIndex = '';
      cardsFlipped = 0;
    }, 500);
  };
};

function timer() {
  const timerEl = document.querySelector('.timer__time');

  function begin(seconds) {
    const start = Date.now();
    const end = start + (seconds * 1000);

    updateTime = setInterval(function() {
      const current = Date.now();
      const timeLeft = Math.round((end - current) / 1000);
      timerEl.textContent = timeLeft;
      if(timeLeft === 0 || remainingMatches === 0) {
        timer().reset();
      }
      if(timeLeft <= 0) {
        populateOutroOverlay().lost();
      }
    }, 1000);
  }

  function reset() {
    clearInterval(updateTime);
    timerEl.textContent = duration;
  }

  return {
    begin: begin,
    reset: reset
  }
};


// function timer(seconds) {
//   let start = Date.now();
//   let end = start + (seconds * 1000);
//   let timerInterval = setInterval(function() {
//     const current = Date.now();
//     const timeLeft = Math.round((end - current) / 1000);
//     document.querySelector('.timer__time').textContent = timeLeft;

//     if(timeLeft === 0 || remainingMatches === 0) {
//       clearInterval(timerInterval);
//       console.log(timerInterval);
//     }

//     if(timeLeft <= 0) {
//       populateOutroOverlay().lost();
//     }
//   }, 1000);
// };

function populateSpellOverlay() {
  let collectedSpell = randomPotterItem(spellData, collectedSpells, 'spell');
  collectedSpells.push(collectedSpell);
  spellOverlayEl.querySelector('.spell__name').textContent = collectedSpell.spell;
  spellOverlayEl.querySelector('.spell__effect').textContent = collectedSpell.effect;
  overlayEl.appendChild(spellOverlayEl);
  setTimeout(function() {
    overlayEl.classList.add('fade-off');

    setTimeout(function() {
      overlayEl.classList.remove('fade-off');
      overlayEl.removeChild(spellOverlayEl);
      remainingMatches--;
      settingSpellsEarnedEl.textContent = collectedSpells.length;
      settingMatchesLeftEl.textContent = remainingMatches;
      if(remainingMatches === 0) {
        populateOutroOverlay().won();
      }
    }, 500);
  }, 1500);
};

function populateOutroOverlay() {
  const title = outroOverlayEl.querySelector('.outro__title');
  const description = outroOverlayEl.querySelector('.outro__description');
  const resetBtn = outroOverlayEl.querySelector('.outro__reset');
  overlayEl.appendChild(outroOverlayEl);
  resetBtn.addEventListener('click', resetGame);
  timer().reset();

  function won() {
    const wonSpellsEl = outroOverlayEl.querySelector('.outro__spells');
    const wonSpellEl = outroOverlayEl.querySelector('.outro__spell');
    wonSpellsEl.removeChild(wonSpellEl);
    collectedSpells.forEach(function(spell) {
      let clone = wonSpellEl.cloneNode(true);
      clone.querySelector('.spell__name').textContent = spell.spell;
      clone.querySelector('.spell__effect').textContent = spell.effect;
      wonSpellsEl.appendChild(clone);
    });
    title.textContent = 'You Won!';
    description.textContent = 'Below you\'ll find a list of your earned spells.';
    resetBtn.textContent = 'New Game';
  }

  function lost() {
    title.textContent = 'You Lost';
    description.textContent = 'You didn\'t learn the spells quick enough to stop the Death Eaters.';
    resetBtn.textContent = 'Try Again';
  }

  return {
    won: won,
    lost: lost
  }
}
  
document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', flipCard);
});

document.querySelector('.setting__reset').addEventListener('click', resetGame);

/////////////////////////////////
//        ajax requests        //
/////////////////////////////////

let characterRequest = new XMLHttpRequest();
characterRequest.open('GET', 'https://www.potterapi.com/v1/characters?key=$2a$10$g1ou2bpWNcB/sLAp9iZLMuspw2OPKf2DUpeRzY3zZzPT8SeC1u7yi', true)
characterRequest.onreadystatechange = function() {
  if(characterRequest.readyState === 4 && characterRequest.status === 200) {
    characterData = JSON.parse(this.response);
    resetGame();
  }
};
characterRequest.send();

let spellRequest = new XMLHttpRequest();
spellRequest.open('GET', 'https://www.potterapi.com/v1/spells?key=$2a$10$g1ou2bpWNcB/sLAp9iZLMuspw2OPKf2DUpeRzY3zZzPT8SeC1u7yi', true);
spellRequest.onreadystatechange = function() {
  if(spellRequest.readyState === 4 && spellRequest.status === 200) {
    spellData = JSON.parse(this.response);
  }
};
spellRequest.send();

let overlayRequest = new XMLHttpRequest();
overlayRequest.open('GET', './overlays.html');
overlayRequest.onreadystatechange = function() {
  if(overlayRequest.readyState === 4 && overlayRequest.status === 200) {
    let overlays = new DOMParser().parseFromString(this.response, 'text/html');
    spellOverlayEl = overlays.querySelector('.overlay__spell');
    outroOverlayEl = overlays.querySelector('.overlay__outro');
  }
}
overlayRequest.send();
