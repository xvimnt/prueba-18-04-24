const httpError = require("../helpers/handleError");
const userModel = require("../models/users");

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
    const response = await userModel.create({ name, email, password });
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
