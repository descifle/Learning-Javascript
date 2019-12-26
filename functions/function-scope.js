//Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
 //Local scope (fahrenheit, celsius)
 //Another local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    
    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let results = convertFahrenheitToCelsius(32)
let otherResults = convertFahrenheitToCelsius(68)
console.log(results)
console.log(otherResults)