const { Router } = require('express')
const dataTableSkuApi = require('./datatable')
const save = require('./save')
const trash = require('./trash')

const SkuApiController = Router()
SkuApiController.use(dataTableSkuApi)
SkuApiController.use(save)
SkuApiController.use(trash)

module.exports = SkuApiController