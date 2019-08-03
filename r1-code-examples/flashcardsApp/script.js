/*
features
- select deck/topic
- select difficulty
- select show term or definition first
- select mode
- number of cards?

modes
- flashcard (standard)
- test (select correct, incorrect, or reshuffle)
- matching

flashcard
- flip button
- correct, incorrect, or reshuffle buttons
- progress indicator that is broken up into correct/incorrect states
- text to speech

programming features
- text to speech
- keyboard support (arrow keys. top/bottom switch term/definition, left/right switch active card)


* Select A Topic
Summary: This page provides a list of topics to study and test from. It is the first page within the application, and provides users a quick and simple way to begin their studying experience.

? User interactions:
- The user can interact with this screen in 2 ways:
  1. Browsing user: Select one of the populated topics upon page load.
  2. Targeted user: Search for a specific topic and then select said topic.

? Technical notes:
- Fits as many topics can exist based on browser size (max of 16)
- Page will recalculate number of topics and positioning upon browser resizing.
- Every X seconds, 1 topic animates small and disappears and a new topic replaces it. This adds visual interest and allows browsing users to see a larger selection of topic options. If there are not enough topics for this, 2 topics animate small and disappear and swap with one another.

? Design notes:
- Each topic has a custom icon (if time allows) or has a color chosen via JavaScript.

? Search notes:
- Search considers the name of the topic as well as any tags associated with the topic.
- User presses enter or the search icon to initiate search.
- Search results replace existing Select A Topic topics. If there are fewer search results than allowed topic spots, there are empty spots.
- User can clear out search results to see the default Select A Topic page.


* Review (Flashcard)

* Memorize (Flashcard)

* Quiz (Matching)
Summary: This game mode tests the user's familiarity with terms/definitions/examples. The user selects one item and then selects one other item that is related to their first selection.

? User interactions:
- The user goes through 3 steps with this game.
  1. Select appropriate settings from an overlay.
  2. Begin matching terms/definitions/examples.
  3. Select replay and/or adjust settings.

? Technical notes:
- Settings overlay appears after user has selected the Match tab. The application uses cookies to save the settings choices, so if the user selects a different game tab and comes back, the overlay will not appear and use their previously selected settings. There is a settings gear icon that can be selected at any time to bring this overlay back up. The overlay includes the following options:
  - Number of matches
  - Types of matches (term/definition, term/example, definition/example, or all 3)
- Progress is indicated by a bar at the top of the screen. When a match is made (whether or not it is a correct)

* Code Test (Text Entry)



! User Flow
- Launch application.
- OPTIONAL search for a target topic.
- Select a topic.

*/

let gameState = {
  topic: '',
  difficulty: '',
  showTerm: true,
  mode: 'flashcard'
}