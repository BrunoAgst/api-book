'use strict'

const Joi = require('joi')

const BookCreateRequest = Joi.object({
    sbn: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    inventory: Joi.number().required()
})

module.exports = { BookCreateRequest }