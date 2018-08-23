const mongoose = require("mongoose");

const cowSchema = new mongoose.Schema({
  name: String,
  age: Number,
  fur_color: String,
  hobbies: [String]
});

module.exports = mongoose.model("Cat", cowSchema);
