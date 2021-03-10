const express = require('express')
const port = process.env.PORT || 4002
const app = express()
const { connect } = require('./config/mongodbConfig')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.use(errorHandler)

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`User Series Service connected at http://localhost:${port}`)
    })
  })