var express = require("express"),
 router = express.Router(),
 login = require("./login.controller");

router.post('/log', login.loginUser);

module.exports = router;


