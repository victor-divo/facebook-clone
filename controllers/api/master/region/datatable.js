const { Router } = require('express')
const response = require('../../../../cores/response')
const datatable = require('../../../../helper/datatable')
const RegionService = require('../../../../services/regionService')

const dataTableRegionApi = Router()

dataTableRegionApi.get('/datatable', async (req, res) => {
    const data = await RegionService.list(req.query)

    return response.raw(res, datatable(data))
})

module.exports = dataTableRegionApi