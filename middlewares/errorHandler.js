const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    error: 500,
    message: "smothing wrong",
  });
};

module.exports = errorHandler;
