const express = require("express");
const router = express.Router();
const {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
  login,
} = require("../controllers/users");
const checkAuth = require("../middleware/auth");

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", createItem);

router.patch("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
