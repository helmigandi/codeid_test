const router = require('express').Router()
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')
const { authorization } = require('../middlewares/auth')

router.use('/access-token', authRoutes)
router.use(authorization)
router.use('/users', userRoutes)

module.exports = router