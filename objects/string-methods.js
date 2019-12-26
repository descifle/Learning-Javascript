let name = '  Andrew    '

// length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

//conver to lower case

console.log(name.toLowerCase())

//includes method

let password = 'abc123psd098'
console.log(password.includes('password'))

//trim
console.log(name.trim())

//challenge area

//isValidPassword
//length is mroe than 8 - and it doesn't contain the word password

let isValidPassword = function(password) {
    if (password.includes('password')) {
        return false
    } else if (password.length <= 8) {
        return false
    } else {
        return true
    }
}
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asdfpsadasr5s4555'))
console.log(isValidPassword('asds553556assdpassword'))

let isThisValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}
console.log(isThisValidPassword('asdfp'))
console.log(isThisValidPassword('asdfpsadasr5s4555'))
console.log(isThisValidPassword('asds553556assdpassword'))