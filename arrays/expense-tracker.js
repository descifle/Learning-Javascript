const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        accountBalance = totalIncome - totalExpenses
        return `${this.name} has a balance of ${accountBalance}. ${totalIncome} in income and ${totalExpenses} in expenses.`
    }
}

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary
// Andrew Mead has a balance of $10.  $100 in income. $90 in expenses.


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())
