const mongoose = require('mongoose');
const model = require("./signup.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.registerUser = (req, res, err) => {

    model.findOne({username: req.body.username})
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
                    }).then((data) => {
                        res.status(200).json({code:"200", status:"OK", 
                                message: "Data posted successfully"
                        });
                    }).catch((error) => {
                        return res.status(500).json({
                            code:500,
                            message: "Server Error",
                            status:'Error',
                            errMsg: error.toString()
                        })
                    });

                });
            }
            else {
                return res.status(409).json({code:"409", status:'Conflict', 
                     message: "Username already exist", msgErr: err.toString()
                })
            }
        });
};

// then((d) => {
//     if (!d) {
//         //post
//         bcrypt.hash(req.body.passWord, SALT_VAl, (err, hash) => {
//             model.create({
//                 firstName: req.body.firstName,
//                 lastName: req.body.lastName,
//                 email: req.body.email,
//                 userName: req.body.userName,
//                 passWord: hash,
//                 created_at: req.body.created_at,
//                 is_deleted: req.body.is_deleted
//             }).then((data) => {
//                 res.status(200).json({
//                     message: "Posted Data"
//                 });
//             }).catch((err) => {
//                 return res.status(500).json({
//                     code:500,
//                     message: "Server Error",
//                     status:'Error',
//                     errMsg: err.toString()
//                 })
//             });

//         });
//     } else {
//         return res.status(409).json({
//             code:"409",
//             message: "Username is already taken",
//             status:'Error',
//             errMsg: err.toString()
//         })
// }