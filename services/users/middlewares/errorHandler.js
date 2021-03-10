const errorHandler = (err, req, res, next) => { 
  const { message } = err
  switch (message) {
    case "DataNotFound":
      res.status(404).json({
        message: 'Sorry. Data not found.'
      })
      break;
    case "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters":
      res.status(404).json({
        message: "Sorry. The user id is invalid."
      })
      break;
    case "Forbidden":
      res.status(403).json({
        message: "Forbidden."
      })
      break;
    case "InvalidToken":
      res.status(403).json({
        message: "Forbidden. Invalid Token"
      })
      break;
    default:
      console.log(err)
      res.status(500).json({
        message: 'Internal server error.'
      })
      break;
  }
}

module.exports = errorHandler