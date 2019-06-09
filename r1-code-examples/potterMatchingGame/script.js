var request = new XMLHttpRequest();
request.open('GET', 'https://www.potterapi.com/v1/characters?key=$2a$10$g1ou2bpWNcB/sLAp9iZLMuspw2OPKf2DUpeRzY3zZzPT8SeC1u7yi', true)
request.onreadystatechange = function() {
  if(request.readyState === 4 && request.status === 200) {
    var data = JSON.parse(this.response);

    const introDeckWrapper = document.querySelector('.intro__decks');
    let introDecks;
    const panels = document.querySelectorAll('section');
    const deckList = [
      {datadeck: 'deathEater', datatitle: 'Death Eater'},
      {datadeck: 'dumbledoresArmy', datatitle: 'Dumbledore\'s Army'}, 
      {datadeck: 'ministryOfMagic', datatitle: 'Ministry of Magic'}, 
      {datadeck: 'orderOfThePhoenix', datatitle: 'Order of the Phoenix'}];
    let selectedDeck;
    let gameOver;

    // general functions
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
          `<img class='deck__icon' src='https://via.placeholder.com/80x80' />
          <p class='deck__title'>${deck.datatitle}</p>`;
        introDeckWrapper.appendChild(newLi);
      });
      introDecks = document.querySelectorAll('.deck');
    })(deckList)

    function gameIntro() {
      gameOver = false;
      document.body.dataset.deck = '';
      showPanel(document.querySelector('.intro'));

      introDecks.forEach(function(deck) {
        deck.addEventListener('click', beginGame);
      });
    }
    gameIntro();

    function beginGame() {
      selectedDeck = this.dataset;
      document.body.dataset.deck = selectedDeck.deck;
      showPanel(document.querySelector('.game'));
      var test = data.filter(function(character) {
        return character[selectedDeck.deck] == true;
      });
      console.log(selectedDeck);
      console.log(test);

      setTimeout(function() {
        gameIntro();
      }, 1000)
    }
  }
}
request.send();


// "menu screen"
// set up html with: title, dtext, decks
// create each deck
// select correct deck based on user selection and add class to ul in game screen
// begin game based on user selection

// "game screen"
// set up html with header for: title, spells earned, matches left, current deck, and timer
// set up html with body for: ul
// select 32 random characters based on deck and assign them to 2 random tiles in 8 x 8 grid
// create

// correct match overlay

// "final screen"
// set up html with header for: title, you won the x deck in x amount of time
// set up html with body for: list of awarded spells and reset button