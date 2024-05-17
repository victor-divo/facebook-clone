const { Router } = require('express')
const isAuthenticated = require('../../../../middlewares/isAuthenticated')
const { error, success } = require('../../../../cores/response')
const RegionService = require('../../../../services/regionService')

const trash = Router()

trash.get('/:id/trash', isAuthenticated, async (req, res) => {
    try {
        await RegionService.trash(req.params.id)
        return success(res, "Data berhasil dihapus", [])
    } catch (err) {

        return error(res, "Data gagal dihapus", [])
    }
})

module.exports = trash