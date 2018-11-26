module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://angry-leakey-e80d2d.netlify.com");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header({
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
        "Access-Control-Max-Age": "86400"
      });
      return res.status(200).json({});
    }
    return next();
  };
  