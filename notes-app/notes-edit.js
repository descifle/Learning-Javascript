const removeElement = document.querySelector('#remove-note')
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('index.html')
}

titleElement.value = note.title
titleElement.addEventListener('input', function (e) {
    //console.log(e.target.value)
    note.title = e.target.value
    saveNotes(notes)
})
bodyElement.value = note.body
bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click', function () {
    console.log(noteId)
    removeNote(noteId)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)

        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
    }
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        // 1. Parse the new ata and update notes
        // 2. Rerender the notes
    }
})