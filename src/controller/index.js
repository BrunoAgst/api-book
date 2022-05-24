'use strict'

module.exports = {
    bookCreate: async (request, response) => {
        try {
            const { sbn, name, description, author, inventory } =  request.body

            response.json({  message: 'ok' })

        } catch (error) {
            console.log(error)
            response.status(500).json({ error: "Internal Server Error" })
        }
    }
}