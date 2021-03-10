const { MongoClient } = require('mongodb')

let database = null

const connect = async () => {
  try {
    // const uri = 'mongodb://localhost:27017'
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    await client.connect()
    const db = client.db('hacktiv-entertainme')
    database = db
    console.log('MongoDB Connected')
    return db
  } catch (error) {
    console.log(error)
  }
}

const getDatabase = () => {
  return database
}

module.exports = {
  connect,
  getDatabase
}