'use strict'

const { BookCreateRequest, BookPatchRequest } = require('../schema/Joi')

module.exports = {
    
    bookCreate: (request, response, next) => {
        const { error } = BookCreateRequest.validate(request.body)

        if(error) {
            response.status(422)
            response.json({ error: error.details[0].message })
            return
        }

        next()
    },

    bookPatch: (request, response, next) => {
        const { error } = BookPatchRequest.validate(request.body)

        if(error) {
            response.status(422)
            response.json({ error: error.details[0].message })
            return
        }

        next()
    },

}