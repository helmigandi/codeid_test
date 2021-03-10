const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.getUsers)
router.get('/:userId', UserController.getUserById)

module.exports = router
