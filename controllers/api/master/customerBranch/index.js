const { Router } = require('express')
const dataTableCustomerBranchApi = require('./datatable')
const save = require('./save')
const trash = require('./trash')

const customerBranchApiController = Router()
customerBranchApiController.use(dataTableCustomerBranchApi)
customerBranchApiController.use(save)
customerBranchApiController.use(trash)

module.exports = customerBranchApiController