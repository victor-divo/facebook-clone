const { Router } = require('express')
const response = require('../../../../cores/response')
const datatable = require('../../../../helper/datatable')
const { SkuService } = require('../../../../services/skuService')

const dataTableSkuApi = Router()

dataTableSkuApi.get('/datatable', async (req, res) => {
    const data = await SkuService.list(req.query)

    return response.raw(res, datatable(data))
})

module.exports = dataTableSkuApi