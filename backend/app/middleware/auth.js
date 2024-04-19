const checkAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ").pop();

  if (token === "4312") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = checkAuth;
