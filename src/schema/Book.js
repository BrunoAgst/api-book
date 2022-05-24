'use strict'

const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    sbn: String,
    name: String,
    description: String,
    author: String,
    inventory: Number
},
{
    timestamps: true
})

module.exports = model('Book', bookSchema)