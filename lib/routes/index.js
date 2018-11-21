var express = require("express"),
    router = express.Router(),
    signup = require("./../modules/signup/signup.route");
    login = require("./../modules/login/login.route");


router.use('/signup/', signup);
router.use('/login/', login);

module.exports = router;


