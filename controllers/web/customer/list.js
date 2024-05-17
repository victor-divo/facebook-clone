const { Router } = require('express')
const isAuthenticated = require('../../../../middlewares/isAuthenticated')

const list = Router()

list.get('/', isAuthenticated, async (req, res) => {
    res.render('pages/master/customer/list')
})

module.exports = list
