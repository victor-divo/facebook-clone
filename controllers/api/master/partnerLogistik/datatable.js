const { Router } = require('express')
const response = require('../../../../cores/response')
const datatable = require('../../../../helper/datatable')
const { PartnerLogisticService } = require('../../../../services/partnerLogisticService')

const dataTableCustomerApi = Router()

dataTableCustomerApi.get('/datatable', async (req, res) => {
    const data = await PartnerLogisticService.list(req.query)

    return response.raw(res, datatable(data))
})

module.exports = dataTableCustomerApi