const express = require('express')
const { passport } = require('../../../config/passport')

const logoutController = express.Router()

logoutController.get('/', async (req, res) => {
    req.session.destroy(err => {
    if (err) {
        logger.error(
        `Error : Failed to destroy the session during logout. ${err}`,
        );
    }

    req.user = null;
    res.redirect(`/`);
    })
})

module.exports = logoutController

