var express = require("express"),
 router = express.Router(),
 login = require("./login_controller");

router.post('/log', login.loginUser);

module.exports = router;


