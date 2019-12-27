// Read existing notes from localStorage

const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } {
        return []
    }
}

// Generate the DOM structure for a note

const generateNoteDOM = function (note) {
    const noteL = document.createElement('p')

        if (note.title.length > 0) {
            noteL.textContent = note.title
        } else {
            noteL.textContent = 'Unnamed note'
        }

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