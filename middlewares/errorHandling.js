/** @format */
// PATH: middlewares/errorHandling.js
export const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    name: err.name || "Uh-oh! Something went wrong!",
    message: err.message || "Houston, we have a server error!",
  });
};
