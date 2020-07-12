const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the schema and model here
const BookSchema = new Schema({
  title: String,
  pages: Number,
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema] // books are from the model above
});
//                            'author' will get pluralized by MondoDB
const Author = mongoose.model('author', AuthorSchema); // includes the BookSchema

module.exports = Author;

// var MyChar = new MarioChar({})
