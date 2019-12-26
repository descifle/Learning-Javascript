let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('account is locked')
} else if (userRole === 'yo') {
    console.log('Welcome Admin!')
}
else {
    console.log('Welcome')
}


let temp = 144
let goodWeather = true

if (temp <= 32) {
    console.log('It is freezing!')
} else if (temp >= 120) {
    console.log('It is scaldingly hot!')
}
else {
    console.log('The weather is great outside')
}