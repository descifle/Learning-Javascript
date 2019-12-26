//function - input (argument), code, output

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()


let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge Area

// convertFahrenheitToCelsius

// call a couple of times (32 -> 0) (68 -> 20)

let convertFahrenheitToCelsius = function (num) {
    let converted = (num - 32) * 5 / 9
    return converted
}

let results = convertFahrenheitToCelsius(32)
let otherResults = convertFahrenheitToCelsius(68)
console.log(results)
console.log(otherResults)

function myFunction() {
   console.log('hello there')
}

myFunction()
