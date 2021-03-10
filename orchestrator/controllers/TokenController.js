const userService = require("../helpers/userService")

class TokenController {
  static async createAccessToken (req, res, next) {
    const { userName, password, role } = req.body
    const { access_token } = req.headers
    try {
      if (!access_token) next({ message: 'Forbidden' })
      const { data } = await userService({
        method: 'POST',
        url: '/access-token',
        headers: {
          access_token
        },
        data: {
          userName,
          password,
          role
        }
      })
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
      next(error.response)
    }
  }
}

module.exports = TokenController