// const p = document.querySelector('p')
// p.remove()

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

// 1. setup a div contain for todos
// 2. setup filters (searchText) and wire up a new filter input to change it
// 3. Create a render todos function to render and rerender the latest filtered data

const filters = {
    searchText: '',
    hideCompleted: false
}

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

    const summary = document.createElement('h2');
    summary.textContent = `you have ${incompleteTodos.length} todos left!`;
    document.querySelector('#todos').appendChild(summary)


    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.content
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        content: e.target.elements.addTodo.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ""
})

document.querySelector('#hide-todos').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})