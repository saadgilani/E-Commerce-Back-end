var express = require('express');
var router = express.Router();

const {logout,CreateRole,login}=require("../controller/index");


// router.get('/login',login);


router.post('/CreateRole',CreateRole);

router.post('/login',login);

router.post('/logout',logout);

// router.get('/getUserByID',getUserByID);

// router.get('/getAllUsers',getUser);

// router.post('/signup',signUp);

module.exports = router;
