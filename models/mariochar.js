const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the schema and model here
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;

// var MyChar = new MarioChar({})
