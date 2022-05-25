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
            return new Error({ error: error.message })
        }
    }

    async getBook(page, limit) {
        try {
            const salt = (page - 1) * limit
            return await bookSchema.find().skip(salt).limit(limit)
        } catch (error) {
            return new Error({ error: error.message })
        }
    }

    async getBookDetails(sbn) {
        try {

            let book = await bookSchema.findOne({ sbn })

            if(!book) return { status: 404, error: 'Book not found' }
            
            return {book}
        } catch (error) {
            return new Error({ error: error.message })
        }
    }

    async patchBook(sbn, payload) {
        try {
            const { name, description, author, inventory } = payload

            let book = await bookSchema.findOneAndUpdate({ sbn }, { name, description, author, inventory })

            if(!book) return { status: 404, error: 'Book not found' }

            return 'ok'
            
        } catch (error) {
            return new Error({ error: error.message })
        }
    }

    async deleteBook(sbn) {
        try {
            await bookSchema.findOneAndDelete({ sbn })

            return 'ok'
        } catch (error) {
            throw new Error({ error: error.message })
        }
    }
}

module.exports = BookRepository