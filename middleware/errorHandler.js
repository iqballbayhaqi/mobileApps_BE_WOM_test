const errorHandler = (err, req, res, next) => {
  if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
    err = err.errors.map(res => res.message)
    res.status(400).json({ message: err })
  } else {
    res.status(500).json({ message: "Internal Server Error", detail: err.message || err })
  }
}

module.exports = errorHandler