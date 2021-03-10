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
}

module.exports = User