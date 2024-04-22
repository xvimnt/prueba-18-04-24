const express = require("express");
const router = express.Router();
const {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/likes");

const checkAuth = require("../middleware/auth");

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", checkAuth, createItem);

router.patch("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
