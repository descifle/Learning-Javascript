// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do
// Response - what was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')
game = new Hangman('Car parts', 2)
puzzleEl.textContent = game.puzzle
guessesEl.textContent = game.gameStatus

window.addEventListener('keypress',(e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.guesses
    statusEl.textContent = game.gameStatus
})

getPuzzle('3').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// getCountry('JM').then((place) => {
//     console.log(place.name)
// }, (error) => {
//     console.log(`Error was: ${error}`)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })
