const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genres: String,
  rating: Number
 });
 
 module.exports = mongoose.model('book', bookSchema);

