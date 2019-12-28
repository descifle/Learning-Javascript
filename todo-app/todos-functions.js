// Get todos from local storage
const getSavedTodos = function (todos) {
    todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }

}

// Save todos to local storage.
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Renders application based on todo filters
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.content.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))


    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove todo based on ID
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const div = document.createElement('div')

    // Creates a input and changes its type to checkbox
    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = todo.completed
    checkBox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)

    })
    //checkBox.type = 'checkbox'

    // Creates a button and changes its text to an X
    const button = document.createElement('button')
    button.textContent = 'X'
    button.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    // Creates a span element and changes its text to todo text
    const span = document.createElement('span')
    span.textContent = todo.content

        div.appendChild(checkBox)
        div.appendChild(span)
        div.appendChild(button)
        return div
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `you have ${incompleteTodos.length} todos left!`;
    return summary
}