const errorHandler = (err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  if (process.env.NODE_ENV !== 'production') {
    console.log(err.stack);
    res.status(status).json({
      message,
      stack: err.stack,
    });
  }
  res.status(status).json({ message });
};

module.exports = errorHandler;
