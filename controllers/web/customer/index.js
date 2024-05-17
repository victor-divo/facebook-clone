const { Router } = require('express')

const list = require('./list')

const customerController = Router()
customerController.use(list)

module.exports = customerController