var express = require("express"),
    router = express.Router(),
    controller = require("../errorlog/errorlog_controller");
    
router.get('/error',controller.getAll);

module.exports = router;


