const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth");
const checkAuth = require("../middleware/auth");

router.post("/", login);

module.exports = router;
