const axios = require('axios')

const userService = axios.create({
  baseURL: process.env.USER_SERVICE_URL
})

module.exports = userService