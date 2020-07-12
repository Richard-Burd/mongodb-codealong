// const mocha = require('mocha'); <= this wasn't needed afterall
const assert = require('assert');
const MarioChar = require('../models/mariochar')

// describe tests
describe('Finding records', function(){

  beforeEach(function(done){
    // assert something
    var char = new MarioChar({
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
  it('Finds one record from the database', function(done){
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });
  });
});
