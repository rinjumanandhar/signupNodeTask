var express = require("express"),
    app = express(),
    parser= require("body-parser"),
    config = require("./lib/modules/config/config"),
    route = require("./lib/routes/index");

const mongoose = require('mongoose');

mongoose.connect(config.database);

mongoose.connection.once('open',function(){
    console.log('Connection has been made')
}).on('error',function(){
    console.log("Connection error:",error);
})

//using bodyparser
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api/', route);


app.listen(8000, () => {
    console.log('Server is up and running');
});