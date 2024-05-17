const { Router } = require('express')
const dataTableRegionApi = require('./datatable')
const save = require('./save')
const trash = require('./trash')

const regionApiController = Router()
regionApiController.use(dataTableRegionApi)
regionApiController.use(save)
regionApiController.use(trash)

module.exports = regionApiController