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

  static async getUserById (req, res, next) {
    const { access_token } = req.headers
    const { userId } = req.params
    try {
      if (!access_token) next({ message: 'Forbidden' })
      const { data: users } = await userService({
        method: 'GET',
        url: `/users/${userId}`,
        headers: {
          access_token
        }
      })
      res.status(200).json(users)
    } catch (error) {
      next(error.response)
    }
  }

  static async getUserByAccountNumber (req, res, next) {
    const { access_token } = req.headers
    const { accountNumber } = req.params
    try {
      if (!access_token) next({ message: 'Forbidden' })
      const { data: users } = await userService({
        method: 'GET',
        url: `/users/accounts/${accountNumber}`,
        headers: {
          access_token
        }
      })
      res.status(200).json(users)
    } catch (error) {
      next(error.response)
    }
  }

  static async getUserByIdentityNumber (req, res, next) {
    const { access_token } = req.headers
    const { identityNumber } = req.params
    try {
      if (!access_token) next({ message: 'Forbidden' })
      const { data: users } = await userService({
        method: 'GET',
        url: `/users/identities/${identityNumber}`,
        headers: {
          access_token
        }
      })
      res.status(200).json(users)
    } catch (error) {
      next(error.response)
    }
  }

  static async addUser (req, res, next) {
    const { access_token } = req.headers
    try {
      if (!access_token) next({ message: 'Forbidden' })
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      const { data: users } = await userService({
        url: '/users',
        method: 'POST',
        data: { 
          userName, 
          accountNumber, 
          emailAddress, 
          identityNumber 
        },
        headers: {
          access_token
        }
      })
      await redis.del('data:users')
      res.status(201).json(users)
    } catch (err) {
      next(err.response)
    }
  }

  static async editUser (req, res, next) {
    const { access_token } = req.headers
    const { userId } = req.params
    try {
      if (!access_token) next({ message: 'Forbidden' })
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      const { data: users } = await userService({
        method: 'PUT',
        url: `/users/${userId}`,
        data: { 
          userName, 
          accountNumber, 
          emailAddress, 
          identityNumber 
        },
        headers: {
          access_token
        }
      })
      if (users) {
        await redis.del('data:users')
        res.status(200).json(users)
      }
    } catch (err) {
      next(err.response)
    }
  }

  static async deleteUser (req, res, next) {
    const { access_token } = req.headers
    const { userId } = req.params
    try {
      if (!access_token) next({ message: 'Forbidden' })
      const { data: users } = await userService({
        method: 'DELETE',
        url: `/users/${userId}`,
        headers: {
          access_token
        }
      })
      if(users) {
        await redis.del('data:users')
        res.status(200).json(users)
      }
    } catch (err) {
      next(err.response);
    }
  }
}

module.exports = UserController