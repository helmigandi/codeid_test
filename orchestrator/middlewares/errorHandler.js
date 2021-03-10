const errorHandler = (err, req, res, next) => { 
  const { message } = err
  switch (message) {
    case "DataNotFound":
      res.status(404).json({
        message: 'Sorry. Data not found.'
      })
      break;
    case "Forbidden":
      res.status(403).json({
        message: 'Forbidden.'
      })
      break;
    default:
      console.log(err)
      if (err.data.message === 'Forbidden.') {
        res.status(403).json({
          message: 'Forbidden.'
        })
      } else if (err.data.message === 'Sorry. The user id is invalid.') {
        res.status(403).json({
          message: 'Sorry. The user id is invalid..'
        })
      } else if (err.data.message === 'Sorry. Data not found.') {
        res.status(404).json({
          message: 'Sorry. Data not found.'
        })
      }
      res.status(500).json({
        message: 'Internal server error.'
      })
      break;
  }
}

module.exports = errorHandler