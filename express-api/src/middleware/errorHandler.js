export const errorHandler = (err, req, res, next) => {
  // Log error untuk debugging server
  console.error(err);

  return res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
    code: err.code || "INTERNAL_ERROR",
  });
};
