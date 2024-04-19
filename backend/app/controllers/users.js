const httpError = require("../helpers/handleError");
const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getItems = async (req, res) => {
  try {
    const response = await userModel.find();
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userModel.findById(id);
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

const createItem = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash password before save
    const hashedPassword = await bcrypt.hash(password, 10);

    // check email is already exist
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "Email is already exist" });
    }

    // Create new user
    const response = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const response = await userModel.updateOne(
      { _id: id },
      { name, email, password }
    );
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userModel.findByIdAndDelete(id);
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
