const { Router } = require('express')
const isAuthenticated = require('../../../../middlewares/isAuthenticated')
const { PartnerLogisticService } = require('../../../../services/partnerLogisticService')
const { success, error } = require('../../../../cores/response')

const save = Router()

save.post('/save', [isAuthenticated], async (req, res) => {
    try {
        delete req.body._csrf

        const {
            id,
            name,
            address,
            email,
            phone,
        } = req.body

        const body = {
            id: id === '' ? 0 : id,
            name,
            address,
            email,
            phone,
        }

        await PartnerLogisticService.save(body)

        const msg = (body.id == 0 || body.id == '' ? 'Data berhasil ditambahkan' : 'Data berhasil disimpan')
        return success(res, msg, [])
    } catch (err) {
        error(res, "Failed to create data")
    }
})

module.exports = save