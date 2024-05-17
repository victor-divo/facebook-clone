const { Router } = require('express')
const isAuthenticated = require('../../../../middlewares/isAuthenticated')
const { SkuService } = require('../../../../services/skuService')
const { success, error } = require('../../../../cores/response')

const save = Router()

save.post('/save', [isAuthenticated], async (req, res) => {
    try {
        delete req.body._csrf

        const {
            id,
            name,
            code,
        } = req.body

        const body = {
            id: id === '' ? 0 : id,
            name,
            code,
        }

        await SkuService.save(body)

        const msg = (body.id == 0 || body.id == '' ? 'Data berhasil ditambahkan' : 'Data berhasil disimpan')
        return success(res, msg, [])
    } catch (err) {
        error(res, "Failed to create data")
    }
})

module.exports = save