'use strict'

const controller = require('./controller')
const middleware = require('./middleware')

const Router = require('express').Router()

Router.get('/book/status', (req, res) => { res.send('ok') })
Router.post('/book', middleware.bookCreate, controller.bookCreate)
Router.get('/book/:sbn', controller.bookGetDetails)

module.exports = Router