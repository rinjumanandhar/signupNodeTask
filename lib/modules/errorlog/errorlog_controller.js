const User = require("../errorlog/errorlog_model");

exports.posting = (err, req, res, next) => {
    let user = new User({
      errMsg: err
    });

    user
      .save()
      .then(data => {
        res.json({ message: "error logs saved in database" });
      })
      .catch(err => {
        res.status(500).json({
          message: "server error",
          errMsg: toString()
        });
      });
  };

  exports.getAll = ( req, res) => {
    User.find()
      .sort({ added_on: "desc" })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.status(500).json({
          message: "server error",
          errMsg: toString()
        });
      });
  };
  