const { generateToken } = require('../helpers/jwtHelper')

class TokenController {

  static async createAccessToken (req, res, next) {
    const { userName, password, role } = req.body
    try {
      if (userName === 'admin' && password === 'admin') {
        const access_token = generateToken({
          userName,
          role
        })
        res.status(200).json({
          access_token
        })
      } else {
        console.log('here')
        next({ message: 'Forbidden' })
      }
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

module.exports = TokenController