const express = require("express");
const router = express.Router();

const { getItem, getItems } = require("../controllers/posts");

router.get("/", getItems);

router.get("/:id", getItem);

module.exports = router;
