const mongoose = require('mongoose');
const model = require("./signup_model");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.registerUser = (req, res, next) => {

    model.findOne({username: req.body.email})
        .then((data) => {
            if (!data) {
                //encrypt the password from body using hash and save data to db
                bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
                    model.create({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        username: req.body.email,
                        password: hash,
                        created_at: req.body.created_at,
                        updated_at: req.body.updated_at,
                        deleted_at: req.body.deleted_at
                    }).then((value) => {
                        res.status(200).json({code:"200", status:"OK", 
                                message: "Data posted successfully"
                        });
                    }).catch((error) => 
                        next(error))
                    });
               
            }

            else {
                return res.status(409).json({code:"409", status:'Conflict', 
                     message: "Username already exist"
                })
            }
        });
};





//express validator
// [
//     check('email').isEmail(),
//     check('password').islength({min: 5})
// ]