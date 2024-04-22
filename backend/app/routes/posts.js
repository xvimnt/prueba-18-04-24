const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/auth");

const { getItem, getItems } = require("../controllers/posts");

router.get("/", checkAuth, getItems);

router.get("/:id", checkAuth, getItem);

module.exports = router;
