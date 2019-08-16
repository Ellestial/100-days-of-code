/*

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

* All Learning Tabs

? Technical notes:
- Settings overlay appears after user has selected each learning tab for the first time. The application uses cookies to save the settings choices, so if the user selects a different game tab and comes back, the overlay will not appear and use their previously selected settings. There is a settings gear icon that can be selected at any time to bring this overlay back up.
- Results overlay appears after user has completed the game. 
- Progress is indicated by a bar at the top of the screen that fills up as each correct match is made.

? Design notes:
- Term, definition, and example should all have distinct styles.

* Flashcards
Summary: This tab allows a user to study the terms, definitions, and examples that will be quizzed on elsewhere in the application. There is a second mode called practice that allows the user to provide feedback on if they got a flashcard correct or incorrect to help practice the learning.

? User interactions:
- The user has two main paths.
- Both paths allow the user to select what should be visible on each side of the flashcard from a list of: term, definition, and example.
- Path 1: Study Mode
  1. Select Study from Settings overlay.
  2. Read first side of flashcard, click the flip button (or anywhere on the card), read the second side of the flashcard.
  3. Press the right/left arrows to go to the next/previous flashcard. The progress bar at the top fills up a bit.
  4. After pressing the right arrow on the last flashcard, a "finished" flashcard appears that provides some text and two buttons, one to study again and one to switch to practice mode.
- Path 2: Practice Mode
  1. Select Practice from Settings overlay.
  2. Read first side of flashcard, contemplate it, and click the flip button after formulating an answer.
  3. Click "I was right" or "I was wrong" based on if the formated answer was correct or incorrect. The progress bar at the top fills up a bit.
  4. After answering "I was right" or "I was wrong" on the last flashcard, a results overlay comes up. It shows some text and the accuracy of response options and provides a numerical x of x correct underneath. There are two buttons, one to practice again and one to switch to study mode.

? Technical notes:
The settings overlay includes the following options:
  - Selection between study and practice mode
  - Selecting what should be visible on side A and side B of each card from a list of term, definition, and example. Both sides cannot be the same.
  - Both modes allow the user to flip the front/back of the card by selecting anywhere on the card.
  - Both modes support keyboard controls. Pressing the space bar flips the card. Using left/right arrows go back/foward a flashcard (in study mode only).
  - Study mode
    - Includes left/right arrows that allow the user to go between cards.
  - Practice mode
    - Cannot flip the card back to side A after flipping once.
    - "I was right" and "I was wrong" buttons that trigger the next flashcard to show once clicking, and whose responses are stored to determine overall accuracy.

* Quiz (Matching)
Summary: This game mode tests the user's familiarity with terms/definitions/examples. The user selects one item and then selects one other item that is related to their first selection.

? User interactions:
- The user goes through 5 steps with this game.
  1. Select appropriate settings from an overlay.
  2. Begin matching terms/definitions/examples.
  3. OPTIONAL selects settings icon, adjusts settings, and creates a new game.
  4. User sees results panel upon game completion.
  5. OPTIONAL Select replay from overlay.

? Technical notes:
The settings overlay includes the following options:
  - Number of matches
  - Types of matches as checkboxes (term/definition, term/example, definition/example)
The results overlay shows the overall accuracy rating of that run and provides a button to start a new game.
- There are 6 available matches at a time. Once the user correctly matches all the pairs, 6 additional matches appear on screen. This happens until the user has gone through 18 matches.
- Positioning and size of each item is based on how long the text within it is. The grid must calculate the best way to lay out the cards based on the following factors: 
  - length of text within each item
  - Type of item (term/example/definition)
  - Viewport size

? Design notes:
- After user clicks "Start Game" from initial settings overlay, it animates into the settings icon so users can make the connection that clicking that icon opens that overlay.
- There is a visual indicator when an incorrect and a correct match is made.
- This utilizes CSS Grid.
- Terms, examples, and definitions all have visually distinct styles on their cards.


* Test
Summary: The user now tests their knowledge theyy gained from flashcards and matching through multiple choice, true/false, and text input questions.

? User interactions:
- The user selects from the settings overlay: how many questions they'd like, what styles of questions should be included, and what types of questions should be included.
- User reads statement and selects (or types in) an answer option. 
- User repeats the previous step until all questions are answered.
- OPTIONAL Select review from overlay. The user then scrolls through all answered questions that now have a correct/incorrect indicator.
- OPTIONAL Select replay from overlay.

? Technical notes:
- The settings overlay includes the following options:
  - Number of questions
  - Types of questions as checkboxes (term/definition, term/example, definition/example)
  - Styles of questions as checkboxes (true/false, multiple choice, text input)
- The results overlay shows the overall accuracy rating of that run and provides a button to start a new game or see a breakdown of what questions the user got correct/incorrect.
- Question styles and types will be randomized based on the selection from the settings overlay.
- One question appears at a time. The previous and next questions are slightly visible at the top/bottom of the screen.
- Text Input: only accepts example or term as input, not definition. Uses regex to allow for any uppercase/lowercase characters.
- Remember correct/incorrect choices to reveal in review section, which indicates a correct or incorrect indicator on each question, as well as the correct choice.
- Each question has an icon representing the style and question number.
- Review: scrolling will make the cards move (think Animate on Scroll).

? Design notes: 



! User Flow
- Launch application.
- OPTIONAL search for a target topic.
- Select a topic.
- OPTIONAL 

! Future State
- Allow JSON upload to replace existing items. Use cookies to save them.

*/

let gameState = {
  topic: '',
  difficulty: '',
  showTerm: true,
  mode: 'flashcard'
}