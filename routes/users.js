var express = require('express');
var router = express.Router();

const { userLogin } = require("../controllers/usersController")

/* GET users listing. */
router.get('/login',userLogin);

module.exports = router;
