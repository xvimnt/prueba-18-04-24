const httpError = require("../helpers/handleError");
const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check email is already exist
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    // Check password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).send({ message: "Password is incorrect" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.send({ token });
  } catch (error) {
    httpError(res, error);
  }
};

module.exports = {
  login,
};
