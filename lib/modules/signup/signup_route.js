var express = require("express"),
    router = express.Router(),
    register = require("./signup_controller");

router.post('/create', register.registerUser);

module.exports = router;

