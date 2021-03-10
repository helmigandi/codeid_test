const Redis = require('ioredis')
const redis = new Redis(process.env.REDIS_URI, {
  password: process.env.REDIS_PASSWORD
})

module.exports = redis