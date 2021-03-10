const router = require('express').Router()
const TokenController = require('../controllers/TokenController')

router.post('/', TokenController.createAccessToken)

module.exports = router
