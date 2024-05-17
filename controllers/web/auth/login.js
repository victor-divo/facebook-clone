const express = require('express')
const { passport } = require('../../../config/passport')

const loginController = express.Router()

loginController.get('/', async (req, res) => {
    res.render('pages/auth/login')
})

loginController.post('/', passport.authenticate('local', {
    successRedirect: `/`,
    failureRedirect: `/login`,
    failureFlash: true
}))

module.exports = loginController

