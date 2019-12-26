let temp = 110

//logical and operator - true if both sides are true. false otherwise
//logical Or operator - true if at least one side is true. false otherwise

if (temp >= 60 && temp <=90) {
    console.log('it is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('yeet on their soul')
}

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Take a Look at our Vegan Menu selection!')
} else if (isGuestTwoVegan || isGuestOneVegan) {
    console.log('We have Both Vegan And Regular Menus')
} else {
    console.log('Here is our Menu of Wonderous different foods')
}