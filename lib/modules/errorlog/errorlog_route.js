var express = require("express"),
    router = express.Router(),
    controller = require("../errorlog/errorlog_controller");
    

//router.post('/post/', controller.post);
router.get('/get/', controller.getAll);

module.exports = router;


