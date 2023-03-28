const userService=require("../../service/userService");
const bcrypt= require('bcrypt');


module.exports =async function(req,res){
    const data=await userService.signup(req.body);
    res.send(data);
}