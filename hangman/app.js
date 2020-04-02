const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')
game = new Hangman('Cat', 2)
puzzleEl.textContent = game.puzzle
guessesEl.textContent = game.gameStatus

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.guesses
    statusEl.textContent = game.gameStatus
    
})