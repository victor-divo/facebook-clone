const { Router } = require('express')
const dataTablePartnerLogisticApi = require('./datatable')
const save = require('./save')
const trash = require('./trash')

const partnerLogisticApiController = Router()
partnerLogisticApiController.use(dataTablePartnerLogisticApi)
partnerLogisticApiController.use(save)
partnerLogisticApiController.use(trash)

module.exports = partnerLogisticApiController