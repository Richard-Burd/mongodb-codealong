const mongoose = require('mongoose');

// ES6 Default Promises
// This was not necessary, but without it, there was a depreciation
// warning showing up for NetNinja that was not showing up here locally
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(function(done){ // any code in here is gonna run before we start the tests

  // connect to MongoDB
  // mongoose.connect('mongodb://localhost/testaroo');
  // depreciations have occured since video was made:
  // https://github.com/Automattic/mongoose/issues/8156
  mongoose.connect('mongodb://localhost/testaroo', {
    useNewUrlParser: true,
    useUnifiedTopology: true });


  //
  mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
    done();
  }).on('error', function(error){
    console.log('Connection error:', error);
  });


});
