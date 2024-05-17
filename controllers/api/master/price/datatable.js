const { Router } = require('express')
const response = require('../../../../cores/response')
const datatable = require('../../../../helper/datatable')
const { PriceService } = require('../../../../services/priceService')

const dataTablePriceApi = Router()

dataTablePriceApi.get('/datatable', async (req, res) => {
    const data = await PriceService.list(req.query)

    return response.raw(res, datatable(data))
})

module.exports = dataTablePriceApi