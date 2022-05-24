'use strict'

const bookSchema = require('../../schema/Book')

class BookRepository {
    async createBook(payload) {
        try {
            const { sbn, name, description, author, inventory } = payload

            let searchBook = await bookSchema.findOne({ sbn })

            if(searchBook) return { status: 401, error: 'Book exists' }

            await bookSchema.create({ sbn, name, description, author, inventory })

            return 'ok'
        } catch (error) {
            throw new Error({ error: error.message })
        }
    }

    async getBookDetails(sbn) {
        try {

            let book = await bookSchema.findOne({ sbn })

            if(!book) return { status: 404, error: 'Book not found' }
            
            return {book}
        } catch (error) {
            throw new Error({ error: error.message })
        }
    }
}

module.exports = BookRepository