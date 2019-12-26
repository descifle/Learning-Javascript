let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

//let otherAccount = myAccount
//otherAccount.income = 1000

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

// addIncome
let addIncome = function(account, amount) {
    account.income = account.income + amount
    console.log(account)
}
// resetAccount
let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
    console.log(account)
}
// getAccountSummary
let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses`
}
// Account for andrew has 900. 1000 in income. 100 in expenses

addExpense(myAccount, 100)
addIncome(myAccount, 1000)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
console.log(myAccount)