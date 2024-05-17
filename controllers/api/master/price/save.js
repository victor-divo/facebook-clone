const moment = require('moment')
const { Router } = require('express')
const isAuthenticated = require('../../../../middlewares/isAuthenticated')
const PriceService = require('../../../../services/priceService')
const { success, error } = require('../../../../cores/response')

const save = Router()

save.post('/save', [isAuthenticated], async (req, res) => {
    try {
        delete req.body._csrf

        const {
            id,
            skuId,
            dateRange,
        } = req.body

        const range = dateRange.split(' to ')

        const body = {
            id: id === '' ? 0 : id,
            skuId: parseInt(skuId),
            dateStart: moment(range[0], 'DD-MM-YYYY').format('YYYY-MM-DD'),
            dateUntil: moment(range[1], 'DD-MM-YYYY').format('YYYY-MM-DD'),
        }

        await PriceService.save(body)

        const msg = (body.id == 0 || body.id == '' ? 'Data berhasil ditambahkan' : 'Data berhasil disimpan')
        return success(res, msg, [])
    } catch (err) {
        error(res, "Failed to create data")
    }
})

module.exports = save