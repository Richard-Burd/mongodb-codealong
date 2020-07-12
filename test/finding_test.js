// const mocha = require('mocha'); <= this wasn't needed afterall
const assert = require('assert');
const MarioChar = require('../models/mariochar')

// describe tests
describe('Finding records', function(){

  var char; // declare the variable to be defined later on down below

  beforeEach(function(done){
    // assert something
    char = new MarioChar({
      name: "Mario"
    });

    // mongoose gives us this save method
    // this method is asyncronious.
    char.save().then(function(){
      assert(char.isNew === false); // is true when saved locally but not in the database
      done();
    });
  });
  // create tests
  it('Finds one record by name from the database', function(done){
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });
  });

  it('Finds one record by ID from the database', function(done){
    MarioChar.findOne({_id: char._id}).then(function(result){
      // these are both objects, which aren't the same, so they're made into strings
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
