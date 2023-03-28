var express = require('express');
var router = express.Router();

const {addProduct,getAllProducts,getProductByID,updateProduct,removeProduct,getCategories,getByCategory,addManyProducts}=require("../controller/index");


// router.get('/login',login);



router.post('/addProduct',addProduct);
router.get('/getAllProducts',getAllProducts);
router.get('/getProductByID',getProductByID);
router.post('/updateProduct',updateProduct);
router.delete('/removeProduct',removeProduct);
router.get('/getCategories',getCategories);
router.get('/getByCategory',getByCategory);
router.post('/addManyProducts',addManyProducts);
// router.post('/signup',signUp);

module.exports = router;
