const { verifyToken } = require('../helpers/jwtHelper')

const authorization = async (req, res, next) => {
  try {
    if(req.headers.access_token){
      let decryptedData = verifyToken(req.headers.access_token)
      if (decryptedData.role === 'admin') {
        next()
      } else {
        next({
          message: 'Forbidden'
        })
      }
    }else{
      next({
        message: 'Forbidden'
      })
    }
  } catch (error) {
    next({
      message: 'InvalidToken'
    })
  }
}

module.exports = {
  authorization
}