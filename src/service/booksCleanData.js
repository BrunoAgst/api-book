const bookFactory = require('../factory/bookFactory')

module.exports = (books) => {
    let booksClean = []
    
    books.forEach(book => {
        if(book.inventory > 0) {
            booksClean.push(new bookFactory(book).factoryListAll())
        }
    });

    return booksClean
}