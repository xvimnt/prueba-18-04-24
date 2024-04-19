const express = require("express");
const router = express.Router();

const fs = require("fs");

const removeExtension = (file) => {
  return file.split(".")[0];
};

const pathRoute = `${__dirname}`;

// Reading file names to load dynamic routes
fs.readdirSync(pathRoute).filter((file) => {
  const fileName = removeExtension(file);
  const skip = ["index"].includes(fileName);
  if (!skip) {
    router.use(`/${fileName}`, require(`./${fileName}`));
    console.log(`Loaded route: /${fileName}`);
  }
});

router.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

module.exports = router;
