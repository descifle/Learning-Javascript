// Read existing notes from localStorage

const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } {
        return []
    }
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note

const generateNoteDOM = function (note) {
    const noteL = document.createElement('div')
    const textL = document.createElement('span')
    const button = document.createElement('button')

    // Setup the remove note button
    button.textContent = 'x'
    noteL.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
        if (note.title.length > 0) {
            textL.textContent = note.title
        } else {
            textL.textContent = 'Unnamed note'
        }

        noteL.appendChild(textL)

        return noteL
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteL = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteL)
    })
}

saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}