'use strict'

const controller = require('./controller')
const middleware = require('./middleware')

const Router = require('express').Router()

Router.get('/book/status', (req, res) => { res.send('ok') })
Router.post('/book', middleware.bookCreate, controller.bookCreate)
Router.get('/book', controller.bookGetAll)
Router.get('/book/:sbn', controller.bookGetDetails)
Router.patch('/book/:sbn', middleware.bookPatch, controller.bookPatch)
Router.delete('/book/:sbn', controller.bookDelete)

module.exports = Router