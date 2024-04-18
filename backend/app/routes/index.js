const express = require("express");
const router = express.Router();

const fs = require("fs");

const pathRoute = `${__dirname}`;

fs.readdirSync(pathRoute).filter((file) => {
  console.log(file);
});

module.exports = router;
