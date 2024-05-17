const { Router } = require('express')
const response = require('../../../../cores/response')
const datatable = require('../../../../helper/datatable')
const { CustomerBranchService } = require('../../../../services/customerBranchService')

const dataTableCustomerBranchApi = Router()

dataTableCustomerBranchApi.get('/datatable', async (req, res) => {
    const data = await CustomerBranchService.list(req.query)

    return response.raw(res, datatable(data))
})

module.exports = dataTableCustomerBranchApi