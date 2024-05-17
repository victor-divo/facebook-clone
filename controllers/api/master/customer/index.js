const { Router } = require('express')
const dataTableCustomerApi = require('./datatable')
const save = require('./save')
const trash = require('./trash')

const customerApiController = Router()
customerApiController.use(dataTableCustomerApi)
customerApiController.use(save)
customerApiController.use(trash)

module.exports = customerApiController