const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
  {
    like_id: {
      type: String,
      required: true,
    },
    post_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("like", LikeSchema);
