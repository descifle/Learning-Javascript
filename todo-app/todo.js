// const p = document.querySelector('p')
// p.remove()

let todos = getSavedTodos()
 
const filters = {
    searchText: '',
    hideCompleted: false
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
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ""
})

document.querySelector('#hide-todos').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})