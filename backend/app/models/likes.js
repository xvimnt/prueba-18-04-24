const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    article_id: {
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
