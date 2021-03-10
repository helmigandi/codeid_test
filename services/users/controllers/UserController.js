 const { 
  findUsers,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById
} = require('../models/User')

class UserController {

  static async getUsers (req, res, next) {
    try {
      const data = await findUsers()
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static async getUserById (req, res, next) {
    const { userId } = req.params
    try {
      const data = await findUserById(userId)
      if (data) {
        res.status(200).json(data)
      } else {
        next({ message: 'DataNotFound' })
      }
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static async addUser (req, res, next) {
    const { userName, accountNumber, emailAddress, identityNumber } = req.body
    const payload = {
      userName: userName || '',
      accountNumber: accountNumber || '',
      emailAddress: emailAddress || '',
      identityNumber: identityNumber || ''
    }
    try {
      const responses = await createUser(payload)
      res.status(200).json(responses.ops[0])
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static async editUser (req, res, next) {
    const { userId } = req.params
    const { userName, accountNumber, emailAddress, identityNumber } = req.body
    const payload = {
      userName: userName || '',
      accountNumber: accountNumber || '',
      emailAddress: emailAddress || '',
      identityNumber: identityNumber || ''
    }
    try {
      const responses = await updateUserById(userId, payload)
      if (responses.result.n === 1) {
        res.status(200).json({
          message: 'Success edit data'
        })
      } else {
        next({ message: 'DataNotFound' })
      }
    } catch (error) {
      next(error)
    }
  }

  static async deleteUser (req, res, next) {
    const { userId } = req.params
    try {
      const responses = await deleteUserById(userId)
      if (responses.deletedCount === 1) {
        res.status(200).json({
          message: 'Success delete data'
        })
      } else {
        next({ message: 'DataNotFound' })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController