var express = require('express');
var router = express.Router();

const {createCart,updateCart,removeCart,getAllCart,getCartByID}=require("../controller/index");


// router.get('/login',login);



router.post('/createCart',createCart);
router.get('/getAllCart',getAllCart);
router.get('/getCartByID',getCartByID);
router.post('/updateCart',updateCart);
router.delete('/removeCart',removeCart);

// router.post('/signup',signUp);

module.exports = router;
