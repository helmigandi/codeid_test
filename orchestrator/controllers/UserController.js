const redis = require("../helpers/redisHelper")
const userService = require("../helpers/userService")

class UserController {

  static async getUsers (req, res, next) {
    const { access_token } = req.headers
    try {
      if (!access_token) next({ message: 'Forbidden' })
      const usersData = await redis.get('data:users')
      if (usersData) {
        res.status(200).json(JSON.parse(usersData))
      } else {
        const { data: users } = await userService({
          method: 'GET',
          url: '/users',
          headers: {
            access_token
          }
        })
        redis.set('data:users', JSON.stringify(users))
        res.status(200).json(users)
      }
    } catch (error) {
      next(error.response)
    }
  }
}

module.exports = UserController