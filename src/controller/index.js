'use strict'

const BookRepository = require('../service/repository/bookRepository')
const BookFactory = require('../factory/bookFactory')
const booksCleanData = require('../service/booksCleanData')

module.exports = {
    bookCreate: async (request, response) => {
        try {
            const payload = request.body

            const bookRepository = new BookRepository()

            const { status, error } = await bookRepository.createBook(payload)

            if(error) {
                return response.status(status).json({ error })
            }

            response.json({  message: 'book created successfully' })

        } catch (error) {
            console.log(error)
            response.status(500)
            response.json({ error: "Internal Server Error" })
        }
    },

    bookGetAll: async (request, response) => {
        try {
            const { page, limit } = request.query

            const bookRepository = new BookRepository()

            const books = await bookRepository.getBook(page || 1, limit || 10)

            const booksClean = booksCleanData(books)

            response.json(booksClean)

        } catch (error) {
            console.log(error)
            response.status(500)
            response.json({ error: "Internal Server Error" })
        }
    },

    bookGetDetails: async (request, response) => {
        try {
            const sbn = request.params.sbn

            const bookRepository = new BookRepository()

            const { status, book, error } = await bookRepository.getBookDetails(sbn)

            if(error) {
                return response.status(status).json({ error })
            }

            const bookFactory = new BookFactory(book).factory()

            response.json(bookFactory)
            

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: "Internal Server Error" })
        }
    },

    bookPatch: async (request, response) => {
        try {
            const sbn = request.params.sbn
            const payload = request.body

            const bookRepository = new BookRepository()

            const { status, error} = await bookRepository.patchBook(sbn, payload)

            if(error) {
                return response.status(status).json({ error })
            }

            response.json('book updated success')

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: "Internal Server Error" })
        }
    },

    bookDelete: async (request, response) => {
        try {   
            const sbn = request.params.sbn
            const bookRepository = new BookRepository()

            await bookRepository.deleteBook(sbn)

            response.json('book deleted success')

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: "Internal Server Error" })
        }
    }
}