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

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const p = document.createElement('p')
        p.textContent = todo.content
        return p
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `you have ${incompleteTodos.length} todos left!`;
    return summary
}