'use strict'

const BookRepository = require('../service/repository/bookRepository')

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
    }
}