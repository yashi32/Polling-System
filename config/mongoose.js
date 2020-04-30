//this file is used to set connection with the database
const mongoose= require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//name of the db is products-api
mongoose.connect('mongodb://localhost/poll-api');

const db=mongoose.connection;
//for error
 db.on('error', console.error.bind(console,"Error Connecting to Database!!"));

 //on success
 db.once('open', ()=>{
     console.log("Conncted to database!");
 });

 module.exports=db;