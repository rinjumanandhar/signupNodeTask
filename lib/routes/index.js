var express = require("express"),
    signup = require("./../modules/signup/signup_route"),
    login = require("./../modules/login/login_route"),
    errorlog = require("./../modules/errorlog/errorlog_route");

  exports.init = (app)=> {
        app.use('/signup/', signup);
        app.use('/login/', login);
        app.use('/error', errorlog);
    }



