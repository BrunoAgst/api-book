'use strict'

const Router = require('express').Router()

Router.get('/book/status', (req, res) => { res.send('ok')})

module.exports = Router