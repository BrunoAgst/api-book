'use strict'

const { BookCreateRequest } = require('../schema/Joi')

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

}