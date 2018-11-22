var express = require("express"),
    router = express.Router(),
    signup = require("./../modules/signup/signup_route");
    login = require("./../modules/login/login_route");


router.use('/signup/', signup);
router.use('/login/', login);

module.exports = router;


