/////////////////////////////////
//       global variables      //
/////////////////////////////////

const panels = document.querySelectorAll('section');
const infoDeck = document.querySelector('.deck__name');
const overlayEl = document.querySelector('.overlay__wrapper');
const infoMatchesLeft = document.querySelector('.matches__num');
const infoSpellsEarned = document.querySelector('.spells__num');
const numCards = 36;
let characterData;
let spellData;
let selectedDeck;
let selectedDeckData;
let selectedDeckCards = [];
let collectedSpells = [];
let remainingMatches = numCards / 2;
const deckList = [
  {deck: 'deathEater', decktitle: 'Death Eater'},
  {deck: 'dumbledoresArmy', decktitle: 'Dumbledore\'s Army'}, 
  {deck: 'ministryOfMagic', decktitle: 'Ministry of Magic'}, 
  {deck: 'orderOfThePhoenix', decktitle: 'Order of the Phoenix'}];

/////////////////////////////////
//    onload/IIFE functions    //
/////////////////////////////////
window.onload = function() {
  panels.forEach(function(panel) {
    panel.style.display = 'none';
  });
};

(function createDecks(decks) {
  let decksEl = document.querySelector('.intro__decks');
  let deckEl = document.querySelector('.deck');
  decksEl.removeChild(deckEl);

  decks.forEach(function(deck) {
    let clone = deckEl.cloneNode(true);
    clone.dataset.deck = deck.deck;
    clone.dataset.title = deck.decktitle;
    clone.querySelector('.deck__icon').src = `https://via.placeholder.com/80x80?text=${deck.deck}`;
    clone.querySelector('.deck__title').textContent = deck.decktitle;
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

function showPanel(shownPanel) {
  panels.forEach(function(panel) {
    panel.style.display = 'none';
  });
  shownPanel.style.display = 'block';
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
  infoMatchesLeft.textContent = remainingMatches;
  infoSpellsEarned.textContent = 0;
  overlayEl.textContent = '';
  showPanel(document.querySelector('.intro'));

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
  selectedDeckData = characterData.filter(function(character) {
    return character[selectedDeck.deck] == true;
  });
  infoDeck.textContent = selectedDeck.title;
  showPanel(document.querySelector('.game'));
  grabRandomCharacters();
  
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
  if(thisSelection === lastSelection) {
    return;
  }
  cardsFlipped++;
  if(cardsFlipped > 2) {
    cardsFlipped--;
    return;
  }

  thisSelection.classList.add('card--flipped');
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
      lastSelection.classList.remove('card--flipped');
      thisSelection.querySelector('.card__name').textContent = '';
      thisSelection.querySelector('.card__blood').textContent = '';
      thisSelection.classList.remove('card--flipped');
      lastSelection = '';
      lastIndex = '';
      cardsFlipped = 0;
    }, 500);
  };
};

function populateSpellOverlay() {
  let collectedSpell = randomPotterItem(spellData, collectedSpells, 'spell');
  collectedSpells.push(collectedSpell);
  overlayEl.innerHTML = `
  <div class="overlay__spell">
    <h4 class="spell__title font-size-body-l">You Earned</h4>
    <img class="spell__icon" src="https://via.placeholder.com/125x125?text=Spell" />
    <h2 class="spell__name font-size-header">${collectedSpell.spell}</h2>
    <h3 class="spell__effect font-size-subheader">${collectedSpell.effect}</h3>
  </div>`;
  setTimeout(function() {
    overlayEl.classList.add('fade-off');

    setTimeout(function() {
      overlayEl.classList.remove('fade-off');
      overlayEl.innerHTML = '';
      infoSpellsEarned.textContent = collectedSpells.length;
      if(remainingMatches > 0 ) {
        remainingMatches--;
        infoMatchesLeft.textContent = remainingMatches;
      }
      if(remainingMatches === 0) {
        populateWonOverlay();
      }
    }, 500);
  }, 1500);
};

function populateWonOverlay() {
  overlayEl.innerHTML = `
  <div class="overlay__won">
    <h3 class="won__title font-size-header">You Won!</h3>
    <p class="won__description font-size-body-l">Below you'll find a list of your earned spells.</p>
    <ul class="won__spells"></ul>
    <button class="won__reset">New Game</button>
  </div>`;
  const wonSpellsEl = document.querySelector('.won__spells');
  collectedSpells.forEach(function(spell) {
    let newLi = document.createElement('li');
    newLi.classList.add('won__spell');
    newLi.innerHTML = `
    <h4 class="font-size-subheader">${spell.spell}</h4>
    <p class="font-size-body-l">${spell.effect}</p>`;
    wonSpellsEl.appendChild(newLi);
  });
  document.querySelector('.won__reset').addEventListener('click', resetGame);
};
  
document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', flipCard);
});

document.querySelector('.game__reset').addEventListener('click', resetGame);

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
