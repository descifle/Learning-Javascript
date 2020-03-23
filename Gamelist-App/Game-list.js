// game Class: respresents a game
class Game {
    constructor (title, company, isbn) {
        this.title = title;
        this.company = company;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayGames() {
        const games = Store.getGames();

        games.forEach((game) => UI.addGameToList(game));
    }
    
    static addGameToList(game) {
        const list = document.querySelector('#game-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${game.title}</td>
        <td>${game.company}</td>
        <td>${game.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;

        list.appendChild(row);
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#game-form');
        container.insertBefore(div, form);
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#company').value = '';
        document.querySelector('#isbn').value = '';
    }

    //the function to delete the game

    static deleteGame(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove()
        }
    }

}

// Store Class: Handles Storage
class Store {
    static getGames() {
        let games;
        if (localStorage.getItem('games') === null) {
            games = [];
        }   else {
            games = JSON.parse(localStorage.getItem('games'));
        }

        return games;
    }

    static addGame(game) {
        const games = Store.getGames();

        games.push(game);

        localStorage.setItem('games', JSON.stringify(games));
    }

    static removeGame(isbn) {
        const games = Store.getGames();

        games.forEach((game, index) => {
            if(game.isbn === isbn) {
                games.splice(index, 1);
            }
        });

        localStorage.setItem('games', JSON.stringify(games));
    }
}

// Event: Display game
document.addEventListener('DOMContentLoaded', UI.displayGames);

// Event: Add a game
document.querySelector('#game-form').addEventListener('submit', (e) => {
    //prevent actual submit
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const company = document.querySelector('#company').value;
    const isbn = document.querySelector('#isbn').value;
 
    if(title === '' || company === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
    // Instatiate game
    const game = new Game(title, company, isbn);

    // Add a game to the UI
    UI.addGameToList(game);

    // Add a game to store
    Store.addGame(game);

    UI.showAlert('Game Added', 'success');

    // Clear fields
    UI.clearFields();
    }
    
});

// Event: Remove a game
document.querySelector('#game-list').addEventListener('click', (e) => {
    // remove the game from ui
    UI.deleteGame(e.target)

    //remove a book from local storage Store
    Store.removeGame(e.target.parentElement.previousElementSibling.textContent);

    // Let you know when the book gets removed
    UI.showAlert('Game Removed', 'success');
});
// I seem to be getting a firm understanding of how the dom reacts with javascript... Carry on.