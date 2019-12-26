//multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments

let getScoreText = function (name = 'Anon', score = 0) {
    return `Name: ${name} Score: ${score}`
   // return ' Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//challenge area
// total, tipPercent .5 .1 .2

let getTipPercent = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip of ${total} would be ${tip}`
}

let tip = getTipPercent(60)
console.log(tip)


//challenge area
// A 25% tip on $40 would be $10

let getTipPercents = function (total, tipPercent = .6) {
     return 'How much you owe us:' + total + ' - The tip amount: ' + (total * tipPercent)
}

let getTip = getTipPercents(231,undefined)
console.log(getTip)

let name = 'Jen'
let age = '12'
console.log(`hey, My name is ${name}! I am ${age} years old.`)
