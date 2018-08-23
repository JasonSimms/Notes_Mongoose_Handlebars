// CREATE A SCEHMA FOR CATS IN MONGOOSE AND EXPORT-----------

const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
  // name: String,
  // name: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  fur_color: String,
  hobbies: [String]

  // addresses: [
  //   {
  //     type: String,
  //     street: String,
  //     number: String,
  //     zip: String,
  //   }
  // ]
});

module.exports = mongoose.model("Cat", CatSchema);
