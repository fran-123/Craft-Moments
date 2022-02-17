var express = require('express');
var router = express.Router();

const {productDetail, listProducts} = require("../controllers/productController")

/* GET home page. */
router.get("/productDetail",productDetail)
router.get("/listProducts",listProducts)

module.exports = router;
