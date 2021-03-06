const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;


const bookSchema = new Schema({
  title: { 
      type: String, 
      required: true 
    },
  authors: {
      type: Array,
      required: true
    },
  img: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;