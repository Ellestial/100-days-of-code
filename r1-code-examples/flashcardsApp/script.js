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

*/

let gameState = {
  topic: '',
  difficulty: '',
  showTerm: true,
  mode: 'flashcard'
}