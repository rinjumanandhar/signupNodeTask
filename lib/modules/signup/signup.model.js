const config = require("../config/config");
const mongoose = require('mongoose');

//Connect to mongoDb
mongoose.connect(config.database);

//Create Schema and Model
const Schema = mongoose.Schema;
 
const mySchema = new Schema({
	
    firstname: {type: String, required: true, max: 20},
    lastname: {type: String, required: true, max: 20},
    email: { type: String, required: true },
    username: String,
    password: { type: String, required: true},
    created_at: {type: Date,default: Date.now()},
    updated_at: {type: Date,default: Date.now()},
    deleted_at: {type: Date,default: Date.now()}
});


const MyModel = mongoose.model('LoginModel', mySchema);
module.exports = MyModel;