const userService=require("../../service/userService")

module.exports= async function(req,res){
    const data= await userService.removeUser(req.query);
    res.send(data);
}