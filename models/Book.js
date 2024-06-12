const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: String,
});

module.exports = mongoose.model("book", bookSchema);
