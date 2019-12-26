//lexical Scope (static Scope)
// Scopes
// Global scope - defined outside of all code blocks
// Local Scope  -defined inside of a code block

// Global scope (varOne)
 // Local Scope (varTwo)
  // Local Scope (varFour)
 // Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varTthree'
}

console.log(varTwo)