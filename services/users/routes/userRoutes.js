const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.getUsers)
router.get('/:userId', UserController.getUserById)
router.post('/', UserController.addUser)
router.put('/:userId', UserController.editUser)
router.delete('/:userId', UserController.deleteUser)
router.get('/accounts/:accountNumber', UserController.getUserByAccountNumber)
router.get('/identities/:identityNumber', UserController.getUserByIdentityNumber)

module.exports = router
