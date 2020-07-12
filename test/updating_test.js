// const mocha = require('mocha'); <= this wasn't needed afterall
const assert = require('assert');
const MarioChar = require('../models/mariochar')

// describe tests
describe('Updating records', function(){

  var char; // declare the variable to be defined later on down below

  beforeEach(function(done){
    // assert something
    char = new MarioChar({
      name: "Mario",
      weight: 50
    });

    // mongoose gives us this save method
    // this method is asyncronious.
    char.save().then(function(){
      done();
    });
  });
  // create tests
  it('Updates one record by name from the database', function(done){
    // change name from 'Mario' to 'Luigi'
    MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
      MarioChar.findOne({_id: char._id}).then(function(result){
        // assert the change took place
        assert(result.name === 'Luigi');
        done();
      })
    });
  });

  it('Increments the weight by 1', function(done){
    // updating all instances of this class...
    // $inc is the increment operator, "1" is how much we're incrementing it by
    MarioChar.updateOne({}, {$inc: {weight: 1}}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(record){
        assert(record.weight === 51);
        done();
      });
    });
  });
});
