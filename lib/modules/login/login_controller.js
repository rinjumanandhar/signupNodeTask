const mongoose = require('mongoose');
const model = require("./../signup/signup_model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.loginUser = (req, res, next) => {
    model.findOne({username: req.body.username})
   .exec()
   .then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result){
         if(err) {
            return res.status(401).json({
                code:"401", 
                status: 'Unauthorized Access',
                errMsg: err.toString()
            });
         }

         //create a jwt token with payload firstname,lastname,email and username
         if(result) {
            const data = {
               firstname: user.firstname,
               lastname: user.lastname,
               email: user.email,
               username: user.username,
                _id: user._id
              }

            //take the payload data and response the token with data
            const JWTToken = jwt.sign(data,
               'secret',
                {
                //token expires in 1h
                  expiresIn: '1h'
                });
                return res.status(200).json({
                  success: 'Welcome to the JWT Auth',
                  token: JWTToken,
                  data: data
                });
           }
         return  res.status(401).json({
            code:"401", 
            status: 'Unauthorized Access'        
        });
      });
   })
   .catch((error) => 
      next(error))

}

