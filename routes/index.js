let express = require('express');
let router = express.Router();
let Log = require('../utils/log')

/* GET home page. */
router.get('/', function(req, res, next) {
  let response = {
    serialNum : 15
  }
  res.render('index', { response: response });
});

module.exports = router;
