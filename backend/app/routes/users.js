const express = require("express");
const router = express.Router();
const {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/users");

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", createItem);

router.patch("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
