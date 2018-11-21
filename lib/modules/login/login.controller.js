const mongoose = require('mongoose');
const model = require("./../signup/signup.model");
const bcrypt = require('bcrypt');

//mongoose.Promise = Promise;

exports.loginUser = (req, res) => {

    model.findOne({username: req.body.username })
        .then((data) => {
            if (!data) {
                return res.status(400).json({code:"400", status:"Bad request",
                        message:'Incorrect username/password'
                })
            } 
            else {
                bcrypt.compare(req.body.password, data.password, (err, value) => {
                    if (value == true) {
                        return res.status(200).json({message:"Successfully logged in!!!"});
                    } 
                    else {
                        return res.status(400).json({code:"400", status:"Bad request",
                                message:'Incorrect username/password'})
                    }
                })
            }
        });
};