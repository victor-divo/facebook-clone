const { Router } = require('express')
const customerBranchApiController = require('./customerBranch')
const customerApiController = require('./customer')
const partnerLogisticApiController = require('./partnerLogistik')
const SkuApiController = require('./sku')
const regionApiController = require('./region')
const priceApiController = require('./price')

const masterApiController = Router()
masterApiController.use('/customer', customerApiController)
masterApiController.use('/customer-branch', customerBranchApiController)
masterApiController.use('/partner-logistic', partnerLogisticApiController)
masterApiController.use('/sku', SkuApiController)
masterApiController.use('/region', regionApiController)
masterApiController.use('/price', priceApiController)

module.exports = masterApiController