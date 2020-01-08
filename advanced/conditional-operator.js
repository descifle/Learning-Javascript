// const userAge = 15
// const message = userAge >= 18? 'You can vote' : 'You cannot vote'
// console.log(message)

const myAge = 12
const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Showing the error page'
}
message = myAge >= 21 ? showPage() : showErrorPage()

console.log(message)

const team = ['Tyler', 'Porter', 'John', 'Becky']

const goodTeam = () => {
    return `Team size is currently ${team.length}`
}

const badTeam = () => {
    return 'Too many people on your team'
}

teamSize = team.length >= 4 ? badTeam() : goodTeam()

console.log(teamSize)