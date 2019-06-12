/////////////////////////////////
//       global variables      //
/////////////////////////////////

const panels = document.querySelectorAll('section');
const cards = document.querySelector('.game__cards');
const infoDeck = document.querySelector('.deck__name');
const infoMatchesLeft = document.querySelector('.matches__num');
const infoSpellsEarned = document.querySelector('.spells__num');
const numCards = 4;
let characterData;
let spellData;
let selectedDeck;
let selectedDeckData;
let selectedDeckCards = [];
let collectedSpells = [];
let remainingMatches = numCards / 2;
let introDecks;
const deckList = [
  {datadeck: 'deathEater', datatitle: 'Death Eater'},
  {datadeck: 'dumbledoresArmy', datatitle: 'Dumbledore\'s Army'}, 
  {datadeck: 'ministryOfMagic', datatitle: 'Ministry of Magic'}, 
  {datadeck: 'orderOfThePhoenix', datatitle: 'Order of the Phoenix'}];

/////////////////////////////////
//    onload/IIFE functions    //
/////////////////////////////////

window.onload = function() {
  panels.forEach(function(panel) {
    panel.style.display = 'none';
  });
}

/////////////////////////////////
// multi-use general functions //
/////////////////////////////////

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function showPanel(shownPanel) {
  panels.forEach(function(panel) {
    panel.style.display = 'none';
  })
  shownPanel.style.display = 'block';
}

function resetGame() {
  selectedDeck = undefined;
  selectedDeckData = undefined;
  selectedDeckCards = [];
  collectedSpells = [];
  remainingMatches = numCards / 2;
  document.body.dataset.deck = '';
  cards.innerHTML = '';
  infoMatchesLeft.textContent = remainingMatches;
  infoSpellsEarned.textContent = 0;
  showPanel(document.querySelector('.intro'));
}
  
function randomPotterItem(dataArr, usableArr, title) {
  let newRandomItem = dataArr[randomNum(0, dataArr.length - 1)];
  let duplicate = false;

  usableArr.forEach(function(arrItem) {
    if(arrItem[title] === newRandomItem[title]) {
      return duplicate = true;
    }
  })
  if(duplicate) {
    return randomPotterItem(dataArr, usableArr, title);
  }
  return newRandomItem;
};

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

document.querySelector('button').addEventListener('click', resetGame);

/////////////////////////////////
//    intro panel functions    //
/////////////////////////////////

function gameIntro() {
  resetGame();

  introDecks.forEach(function(deck) {
    deck.addEventListener('click', beginGame);
  });
}

/////////////////////////////////
//        game functions       //
/////////////////////////////////

function beginGame() {
  selectedDeck = this.dataset;
  infoDeck.textContent = selectedDeck.title;
  showPanel(document.querySelector('.game'));
  selectedDeckData = characterData.filter(function(character) {
    return character[selectedDeck.deck] == true;
  });
  createCards();
  grabRandomCharacters();
  watchCards();

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
  };
  
  function grabRandomCharacters() {
    for(let i = 0; i < numCards / 2; i++) {
      let selectedDeckCard = randomPotterItem(selectedDeckData, selectedDeckCards, 'name');
      selectedDeckCards.push(selectedDeckCard, selectedDeckCard);
    }
    
    shuffleCharacters(selectedDeckCards);

    function shuffleCharacters(usableArr) {
      for(let i = 0; i < usableArr.length - 1; i++) {
        let firstEl = usableArr[i];
        let secondIndex = randomNum(0, usableArr.length - 1);
        usableArr[i] = usableArr[secondIndex];
        usableArr[secondIndex] = firstEl;
      }
      return usableArr;
    };
  };
}

function watchCards() {
  const cards = document.querySelectorAll('.card');
  let lastSelection;
  let lastIndex;
  let cardsFlipped = 0;
  
  cards.forEach(function(card) {
    card.addEventListener('click', flipCard);
  })

  function flipCard() {
    cardsFlipped++;
    let thisSelection = this;
    let thisIndex = thisSelection.dataset.index;

    if(this.classList.contains('is--completed') || thisIndex === lastIndex) {
      cardsFlipped--;
      return;
    }

    if(cardsFlipped <= 2) {
      thisSelection.classList.add('card--flipped');
      thisSelection.querySelector('.card__back').innerHTML = `
        <h4 class="card__name">${selectedDeckCards[thisIndex].name}</h4>
        <p class="card__blood">${selectedDeckCards[thisIndex].bloodStatus}</p>`;
    }

    if(cardsFlipped === 1) {
      lastSelection = thisSelection;
      lastIndex = thisIndex;
    }

    if(cardsFlipped === 2 && lastIndex !== thisIndex) {
      checkMatch();
    }
  
    function checkMatch() {
      if(selectedDeckCards[lastIndex] === selectedDeckCards[thisIndex]) {
        lastSelection.classList.add('is--completed');
        lastSelection.innerHTML = '';
        thisSelection.classList.add('is--completed');
        thisSelection.innerHTML = '';
        populateSpellOverlay();
        cardsFlipped = 0;
      } else {

        setTimeout(function() {
          lastSelection.classList.remove('card--flipped');
          lastSelection.querySelector('.card__back').innerHTML = '';
          thisSelection.classList.remove('card--flipped');
          thisSelection.querySelector('.card__back').innerHTML = '';
          cardsFlipped = 0;
        }, 500);
      }
    }
  }
}

function populateSpellOverlay() {
  const correctMatchOverlay = document.querySelector('.game__overlay__wrapper');
  let collectedSpell = randomPotterItem(spellData, collectedSpells, 'spell');
  collectedSpells.push(collectedSpell);

  correctMatchOverlay.innerHTML = `
  <div class="game__overlay">
    <h4 class="overlay__title font-size-body-l">You Earned</h4>
    <img class="overlay__icon" src="https://via.placeholder.com/125x125?text=Spell" />
    <h2 class="overlay__spell font-size-header">${collectedSpell.spell}</h2>
    <h3 class="overlay__spell-effect font-size-subheader">${collectedSpell.effect}</h3>
  </div>`;
  setTimeout(function() {
    correctMatchOverlay.classList.add('fade-off');

    setTimeout(function() {
      correctMatchOverlay.classList.remove('fade-off');
      correctMatchOverlay.innerHTML = '';
      infoMatchesLeft.textContent = remainingMatches--;
      infoSpellsEarned.textContent = collectedSpells.length;
      if(remainingMatches === 0) {
        populateGameOverOverlay();
      }
    }, 500);
  }, 1500);
}

function populateGameOverOverlay() {
  console.log(collectedSpells);
  cards.innerHTML = `
    <h3 class="win__title font-size-header">You Won!</h3>
    <p class="win__description font-size-body-l">Below you'll find a list of your earned spells.</p>
    <ul class="win__spells"></u>`;
  const wonSpells = document.querySelector('.win__spells');
  collectedSpells.forEach(function(spell) {
    let newLi = document.createElement('li');
    newLi.classList.add('win__spell');
    newLi.innerHTML = `
    <h4>${spell.spell}</h4>
    <p>${spell.effect}</p>`;
    wonSpells.appendChild(newLi);
  });
}

/////////////////////////////////
//        ajax requests        //
/////////////////////////////////

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
