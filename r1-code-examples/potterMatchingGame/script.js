/////////////////////////////////
//       global variables      //
/////////////////////////////////

const overlayEl = document.querySelector('.overlay__wrapper');
const settingsEl = document.querySelector('.heading__settings');
const settingDeckEl = document.querySelector('.setting__deck');
const settingMatchesLeftEl = document.querySelector('.matches__num');
const settingSpellsEarnedEl = document.querySelector('.spells__num');
const numCards = 6;
let spellOverlayEl;
let wonOverlayEl;
let lostOverlayEl;
let characterData;
let spellData;
let selectedDeck;
let selectedDeckData;
let selectedDeckCards = [];
let collectedSpells = [];
let remainingMatches = numCards / 2;
const deckList = [
  {deck: 'deathEater', deckTitle: 'Death Eater'},
  {deck: 'dumbledoresArmy', deckTitle: 'Dumbledore\'s Army'}, 
  {deck: 'ministryOfMagic', deckTitle: 'Ministry of Magic'}, 
  {deck: 'orderOfThePhoenix', deckTitle: 'Order of the Phoenix'},
  {deck: 'all', deckTitle: 'All Characters'}];

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
    clone.dataset.title = deck.deckTitle;
    clone.querySelector('.deck__icon').src = `./assets/deck.svg`;
    clone.querySelector('.deck__title').textContent = deck.deckTitle;
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
  selectedDeck = undefined;
  selectedDeckData = undefined;
  selectedDeckCards = [];
  collectedSpells = [];
  remainingMatches = numCards / 2;
  settingMatchesLeftEl.textContent = remainingMatches;
  settingSpellsEarnedEl.textContent = 0;
  overlayEl.textContent = '';
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
  selectedDeck = this.dataset;
  if(selectedDeck.deck !== 'all') {
    selectedDeckData = characterData.filter(function(character) {
      return character[selectedDeck.deck] == true;
    })
  } else {
    selectedDeckData = characterData;
  }
  settingDeckEl.textContent = `${selectedDeck.title} Deck`;
  grabRandomCharacters();
  showState('game');
  setTimer(10);
  
  function grabRandomCharacters() {
    for(let i = 0; i < numCards / 2; i++) {
      let selectedDeckCard = randomPotterItem(selectedDeckData, selectedDeckCards, 'name');
      selectedDeckCards.push(selectedDeckCard, selectedDeckCard);
    }
    shuffle(selectedDeckCards);
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
  thisSelection.querySelector('.card__name').textContent = selectedDeckCards[thisIndex].name;
  thisSelection.querySelector('.card__blood').textContent = selectedDeckCards[thisIndex].bloodStatus;

  if(cardsFlipped === 2 && lastIndex !== thisIndex) {
    return checkMatch();
  }

  lastSelection = thisSelection;
  lastIndex = thisIndex;

  function checkMatch() {
    if(selectedDeckCards[lastIndex] === selectedDeckCards[thisIndex]) {
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

function setTimer(seconds) {
  let start = Date.now();
  let end = start + (seconds * 1000);
  let timerInterval = setInterval(function() {
    const current = Date.now();
    const timeLeft = Math.round((end - current) / 1000);
    document.querySelector('.timer__time').textContent = timeLeft;

    if(timeLeft <= 0) {
      clearInterval(timerInterval);
      overlayEl.appendChild(lostOverlayEl);
    }
  }, 1000);
};

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
        populateWonOverlay();
      }
    }, 500);
  }, 1500);
};

function populateWonOverlay() {
  const wonSpellsEl = wonOverlayEl.querySelector('.won__spells');
  const wonSpellEl = wonOverlayEl.querySelector('.won__spell');
  wonSpellsEl.removeChild(wonSpellEl);
  overlayEl.appendChild(wonOverlayEl);
  collectedSpells.forEach(function(spell) {
    let clone = wonSpellEl.cloneNode(true);
    clone.querySelector('.spell__name').textContent = spell.spell;
    clone.querySelector('.spell__effect').textContent = spell.effect;
    wonSpellsEl.appendChild(clone);
  });
  document.querySelector('.won__reset').addEventListener('click', resetGame);
};
  
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
    wonOverlayEl = overlays.querySelector('.overlay__won');
    lostOverlayEl = overlays.querySelector('.overlay__lost');
  }
}
overlayRequest.send();
