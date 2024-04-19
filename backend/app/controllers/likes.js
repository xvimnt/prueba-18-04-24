const httpError = require("../helpers/handleError");
const likeModel = require("../models/likes");

const getItems = async (req, res) => {
  try {
    const response = await likeModel.find();
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await likeModel.findById(id);
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

const createItem = async (req, res) => {
  try {
    const { user_id, post_id } = req.body;
    const response = await likeModel.create({ user_id, post_id });
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, post_id } = req.body;
    const response = await likeModel.findByIdAndUpdate(id, {
      user_id,
      post_id,
    });
    res.send(response);
  } catch (error) {
    httpError(res, error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await likeModel.findByIdAndDelete(id);
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
