const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema(
  {
    setup: String,
    punchline: String,
  },
  { timestamps: true }
);

const joke = mongoose.model("joke", jokeSchema);

module.exports = joke;