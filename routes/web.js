const express = require('express')
const isAuthenticated = require('../middlewares/isAuthenticated')
const loginController = require('../controllers/web/auth/login.js')
const homeController = require('../controllers/web/home.js')
const logoutController = require('../controllers/web/auth/logout.js')

const web = express.Router()

// public accessible routes
web.use(`/login`, loginController)
// authenticated routes
web.use(isAuthenticated)
web.use(`/`, homeController)
web.use(`/logout`, logoutController)

module.exports = web