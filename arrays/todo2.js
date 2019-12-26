const todo = ['What the frick', 'what da hek', 'ez clap in league', 'the only guy']

console.log(todo.length)
console.log(todo[0])
todo.push('This is the guy')
console.log(todo)
todo.pop()

todo.forEach(function (item, index) {
    item = item + ' that kid'
    index = index + 1
    console.log(`${index} ${item}`)
})