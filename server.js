var express = require("express"),
    app = express(),
    parser= require("body-parser"),
    config = require("./lib/modules/config/config"),
    routerHelper = require("./lib/routes/index");
    errorHandler = require("./lib/modules/errorlog/errorlog_controller");
 
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

//handling route
routerHelper.init(app);

//handling error
app.use(function(err, req, res, next) {
    errorHandler.posting(err, req, res, next);
})

app.listen(8000, () => {
    console.log('Server is up and running');
});