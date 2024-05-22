// Unsupported 404 routes
const notFound = (req, res, next) => {
  const error = new Error(` Not found - ${req.originalUrl}`);
  next(error);
}


// Global Error Handling Middleware
const errorMiddleware = (err, req, res, next) => {
  if (req.headerSent) {
    return next(err);
  }

  res.status( err.code || 500).json({message: err.message || 'Something went wrong 🤦🏻‍♂️'} )
}