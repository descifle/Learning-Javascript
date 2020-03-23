// Display the puzzle to the browser instead of the console
// Display the guesses left to the browser instead of console
// Seperate the Hangmna definition from the rest of the app code
const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {

    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.guesses--
    }
} 



game = new Hangman('Cat', 2)
console.log(game.getPuzzle())

game2 = new Hangman('holymat', 2)
console.log(game2.getPuzzle())


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    console.log(game.getPuzzle())
    console.log(game.guesses)
})