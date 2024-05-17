const { Router } = require('express')
const dataTablePriceApi = require('./datatable')
const save = require('./save')
const trash = require('./trash')

const regionApiController = Router()
regionApiController.use(dataTablePriceApi)
regionApiController.use(save)
regionApiController.use(trash)

module.exports = regionApiController