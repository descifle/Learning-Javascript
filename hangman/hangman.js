// Display the puzzle to the browser instead of the console
// Display the guesses left to the browser instead of console
// Seperate the Hangmna definition from the rest of the app code
const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.gameStatus = function () {

    if (this.status === 'finished') {
        return message = 'Great work! you guessed the word'
    } else if (this.status === 'playing') {
        return message = `Guesses left: ${this.guesses}!`
    } else {
        return `Nice try the word was "${this.word.join('')}".`
    }
}

Hangman.prototype.currentStatus = function () {

    // let finished = true

    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {
          
    //     } else {
    //         finished = false
    //     }
    // })

    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.guesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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

    if(this.status !== 'playing') {
        return
    }

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.guesses--
    }

    this.currentStatus()
} 