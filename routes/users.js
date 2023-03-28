var express = require('express');
var router = express.Router();
const jwtSecret = require ('../config.json');
const jwt = require ('jsonwebtoken');



async function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
}

const {CreateUser,getUserByID,getUser,updateUser,removeUser}=require("../controller/index");


// router.get('/login',login);


router.post('/CreateUser',CreateUser);



router.get('/getUserByID',getUserByID);

router.get('/getAllUsers',authenticateToken,getUser);

router.put('/updateUser',updateUser);

router.delete('/removeUser',removeUser);
// router.post('/signup',signUp);

module.exports = router;
