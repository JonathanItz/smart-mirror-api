const mongoose = require( 'mongoose' )

//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/smart-mirror';
mongoose.connect( mongoDB, { useNewUrlParser: true, useUnifiedTopology: true } );

// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('wtf', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose