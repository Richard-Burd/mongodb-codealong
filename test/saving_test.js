// const mocha = require('mocha'); <= this wasn't needed afterall
const assert = require('assert');
const MarioChar = require('../models/mariochar')

// describe tests
describe('Saving records', function(){

  // create tests
  it('Saves a record to the database', function(done){
    // assert something
    var char = new MarioChar({
      name: "Mario"
    });

    // mongoose gives us this save method
    // this method is asyncronious.
    char.save().then(function(){
      assert(char.isNew === false); // is true when saved locally but not in the database
      done(); // this is a mocha method
    });
  });
});
