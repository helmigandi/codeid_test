const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodbConfig')
const collection = 'users'

class User {
  static findUsers = () => {
    const seriesInstance = getDatabase().collection(collection)
    return seriesInstance.find().toArray()
  }

  static findUserById = (userId) => {
    const seriesInstance = getDatabase().collection(collection)
    return seriesInstance.findOne({
      _id: ObjectId(userId)
    })
  }

  static createUser = (data) => {
    const seriesInstance = getDatabase().collection(collection)
    seriesInstance.createIndexes({ identityNumber: 1 }, { unique: true })
    seriesInstance.createIndexes({ accountNumber: 1 }, { unique: true })
    seriesInstance.createIndexes({ userName: 1 }, { unique: true })
    seriesInstance.createIndexes({ emailAddress: 1 }, { unique: true })
    return seriesInstance.insertOne(data)
  }

  static updateUserById = (userId, data) => {
    const seriesInstance = getDatabase().collection(collection)
    return seriesInstance.updateOne(
      {
        _id: ObjectId(userId)
      },
      {
        $set: data
      }
    )
  }

  static deleteUserById = (userId) => {
    const seriesInstance = getDatabase().collection(collection)
    return seriesInstance.deleteOne({
      _id: ObjectId(userId)
    })
  }

  static findUserByAccountNumber = (accountNumber) => {
    const seriesInstance = getDatabase().collection(collection)
    return seriesInstance.findOne({
      accountNumber: +accountNumber
    })
  }

  static findUserByIdentityNumber = (identityNumber) => {
    const seriesInstance = getDatabase().collection(collection)
    return seriesInstance.findOne({
      identityNumber: +identityNumber
    })
  }
}

module.exports = User