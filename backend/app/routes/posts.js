const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/auth");

const {
  getItem,
  getItems,
  getRecommendedNews,
} = require("../controllers/posts");

router.get("/", checkAuth, getItems);

router.get("/recommended", checkAuth, getRecommendedNews);

router.get("/:id", checkAuth, getItem);

module.exports = router;
