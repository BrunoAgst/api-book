'use strict'

const BookRepository = require('../service/repository/bookRepository')
const BookFactory = require('../factory/bookFactory')

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
            response.status(500).json({ error: "Internal Server Error" })
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
    }
}