const { Router } = require('express')
const response = require('../../../../cores/response')
const datatable = require('../../../../helper/datatable')
const { CustomerService } = require('../../../../services/customerService')

const dataTableCustomerApi = Router()

dataTableCustomerApi.get('/datatable', async (req, res) => {
    const data = await CustomerService.list(req.query)

    return response.raw(res, datatable(data))
})

module.exports = dataTableCustomerApi