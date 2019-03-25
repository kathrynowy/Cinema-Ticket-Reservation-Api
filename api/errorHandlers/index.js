function logErrors(err, req, res, next) {
  console.error(err.stack);
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500)
  res.send('error', { error: err })
}

module.exports = {
  logErrors,
  errorHandler
};