let book = {
    title: 'Artemis Fowls adventures in gnomeragan',
    author: 'John Wilson',
    pageCount: 430
}



let readPages = function(amount) {
    book.pageCount = book.pageCount - amount
    return book.pageCount
}

console.log(readPages(48))
console.log(book.pageCount)

