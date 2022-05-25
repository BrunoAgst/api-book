const bookFactory = require('../factory/bookFactory')

module.exports = (books) => {
    let booksClean = []
    
    books.forEach(book => {
        booksClean.push(new bookFactory(book).factory())
    });

    return booksClean
}