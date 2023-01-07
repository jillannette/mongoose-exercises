const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-exercises');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  hair: String,
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: []
 });

 module.exports = mongoose.model('person', personSchema);
