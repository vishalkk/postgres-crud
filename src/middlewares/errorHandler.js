const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
    status: 500,
  });
}
export default errorHandler;
// This middleware function is used to handle errors in the application.
// It takes four arguments: err, req, res, and next.
// The err argument contains the error object, req is the request object,   