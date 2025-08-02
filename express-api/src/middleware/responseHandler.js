// NOTE: format response sukses menjalankan controller api
export const responseMiddleware = (req, res, next) => {
  res.sendResponse = (data, message = "Success") => {
    return res.status(200).json({
      status: "success",
      message,
      data,
    });
  };

  res.sendError = (message, code = "ERROR", status = 400) => {
    return res.status(status).json({
      status: "error",
      message,
      code,
    });
  };

  next();
};
