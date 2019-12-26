const todos = [{
    content: 'Walk the dog in the morning',
    completed: true
}, {
    content: 'Go to the gym',
    completed: true
}, {
    content: 'Make the new website',
    completed: false
}, {
    content: 'Get that inspection done',
    completed: true
}, {
    content: 'Learn deeper',
    completed: false  
}]

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const deleteTodo = function (todos, content) {
    const index = todos.findIndex(function (todo) {
        return todo.content.toLowerCase() === content.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
       if (!a.completed && b.completed) {
        return -1
       } else if (!b.completed && a.completed) {
        return 1
       } else {
           return 0
       }
    })
}


sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))

// deleteTodo(todos, 'go to t34he gym')
// console.log(todos)