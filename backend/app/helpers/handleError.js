const httpError = (res, error) => {
  console.log(error);
  res.status(500).send("Internal Server Error");
};

module.exports = httpError;
