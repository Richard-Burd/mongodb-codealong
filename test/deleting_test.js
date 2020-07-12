// const mocha = require('mocha'); <= this wasn't needed afterall
const assert = require('assert');
const MarioChar = require('../models/mariochar')

// describe tests
describe('Deleting records', function(){

  var char; // declare the variable to be defined later on down below

  beforeEach(function(done){
    // assert something
    char = new MarioChar({
      name: "Mario"
    });

    // mongoose gives us this save method
    // this method is asyncronious.
    char.save().then(function(){
      done();
    });
  });
  // create tests
  it('Deletes one record by name from the database', function(done){
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });

});
