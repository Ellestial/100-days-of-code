const panels = document.querySelectorAll('section');
const cards = document.querySelector('.game__cards');
const numCards = 36;
let characterData;
let spellData;
let selectedDeck;
let selectedDeckData;
let selectedDeckCards = [];
let gameOver;
let collectedSpells = [];

let introDecks;

const deckList = [
  {datadeck: 'deathEater', datatitle: 'Death Eater'},
  {datadeck: 'dumbledoresArmy', datatitle: 'Dumbledore\'s Army'}, 
  {datadeck: 'ministryOfMagic', datatitle: 'Ministry of Magic'}, 
  {datadeck: 'orderOfThePhoenix', datatitle: 'Order of the Phoenix'}];

// general functions
window.onload = function() {
  panels.forEach(function(panel) {
    panel.style.display = 'none';
  });
}

function showPanel(shownPanel) {
  panels.forEach(function(panel) {
    panel.style.display = 'none';
  })
  shownPanel.style.display = 'block';
}

(function createDecks(decArr) {
  decArr.forEach(function(deck) {
    var newLi = document.createElement('li');
    newLi.classList.add('deck');
    newLi.dataset.deck = deck.datadeck;
    newLi.dataset.title = deck.datatitle;
    newLi.innerHTML = 
      `<img class='deck__icon' src='https://via.placeholder.com/80x80?text=${deck.datadeck}' />
      <p class='deck__title'>${deck.datatitle}</p>`;
    document.querySelector('.intro__decks').appendChild(newLi);
  });
  introDecks = document.querySelectorAll('.deck');
})(deckList)

function resetGame() {
  gameOver = false;
  document.body.dataset.deck = '';
  cards.innerHTML = '';
  showPanel(document.querySelector('.intro'));
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
  
function randomPotterItem(dataArr, usableArr, title) {
  console.log(dataArr);
  let newRandomItem = dataArr[randomNum(0, dataArr.length - 1)];
  let duplicate = false;

  usableArr.forEach(function(arrItem) {
    if(arrItem[title] === newRandomItem[title]) {
      duplicate = true;
    }
  })

  if(duplicate && usableArr.length < dataArr.length) {
    return randomPotterItem();
  }
  
  return newRandomItem;
};

function gameIntro() {
  resetGame();

  introDecks.forEach(function(deck) {
    deck.addEventListener('click', beginGame);
  });
}

function beginGame() {
  selectedDeck = this.dataset;
  document.body.dataset.deck = selectedDeck.deck;
  showPanel(document.querySelector('.game'));
  selectedDeckData = characterData.filter(function(character) {
    return character[selectedDeck.deck] == true;
  });
  randomCharacters();
  
  function randomCharacters() {

    for(let i = 0; i < numCards / 2; i++) {
      let selectedDeckCard = randomPotterItem(selectedDeckData, selectedDeckCards, 'name');
      selectedDeckCards.push(selectedDeckCard, selectedDeckCard);
    }
  };
  createCards();
  flipCard();
}

function createCards() {
  for(let i = 0; i < numCards; i++) {
    const newLi = document.createElement('li');
    newLi.classList.add('card');
    newLi.dataset.index = i;
    newLi.innerHTML = `
    <div class="card__front card__side">
      <img class="card__image" src="https://via.placeholder.com/80x80?text=${selectedDeck.deck}" />
    </div>
    <div class="card__back card__side"></div>`;
    cards.appendChild(newLi);
  }
}

function flipCard() {
  const cards = document.querySelectorAll('.card');
  let firstSelectedCard = '';
  cards.forEach(function(card) {
    card.addEventListener('click', checkMatch);
  })

  function checkMatch() {
    if(firstSelectedCard === '') {
      this.classList.toggle('card--flipped');
      firstSelectedCard = this;
    }
    if(firstSelectedCard === this) {
      firstSelectedCard = '';
    }
  }
}

function populateSpellOverlay() {
  const correctMatchOverlay = document.querySelector('.game__overlay');
  let collectedSpell = randomPotterItem(spellData, collectedSpells, 'spell');
  collectedSpells.push(collectedSpell);

  correctMatchOverlay.innerHTML = `
  <h4 class="overlay__title">You Earned</h4>
  <img class="overlay__icon" src="https://via.placeholder.com/125x125?text=Spell" />
  <h2 class="overlay__spell">${collectedSpell.spell}</h2>
  <h3 class="overlay__spell-type">${collectedSpell.type}</h3>`;
  setTimeout(function() {
    correctMatchOverlay.innerHTML = '';
  }, 1500);
}

// ajax requests
let characterRequest = new XMLHttpRequest();
characterRequest.open('GET', 'https://www.potterapi.com/v1/characters?key=$2a$10$g1ou2bpWNcB/sLAp9iZLMuspw2OPKf2DUpeRzY3zZzPT8SeC1u7yi', true)
characterRequest.onreadystatechange = function() {
  if(characterRequest.readyState === 4 && characterRequest.status === 200) {
    characterData = JSON.parse(this.response);
    gameIntro();
  }
}
characterRequest.send();

let spellRequest = new XMLHttpRequest();
spellRequest.open('GET', 'https://www.potterapi.com/v1/spells?key=$2a$10$g1ou2bpWNcB/sLAp9iZLMuspw2OPKf2DUpeRzY3zZzPT8SeC1u7yi', true);
spellRequest.onreadystatechange = function() {
  if(spellRequest.readyState === 4 && spellRequest.status === 200) {
    spellData = JSON.parse(this.response);
  }
}
spellRequest.send();

// "game screen"
// set up html with header for: title, spells earned, matches left, current deck, and timer
// set up html with body for: ul
// create x number of random cards to fill out the screen (make flexible)
// create variable for first pick and second pick
// when pick first pick, flip card
// when pick second pick, flip card
// create array consisting of x / 2 number of random characters within deck
// see if first pick and second pick are the same character
// if so, trigger overlay
// if so, remove cards
// if so, reduce 1 from total matches remaining
// if so, add 1 to total spells earned
// if not, flip back cards
// if all matches paired, trigger gameOver and overlay

// correct match overlay

// "final screen"
// set up html with header for: title, you won the x deck in x amount of time
// set up html with body for: list of awarded spells and reset button