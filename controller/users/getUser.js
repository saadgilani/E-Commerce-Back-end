const userService=require("../../service/userService")

module.exports= async function(req,res){
    const data= await userService.getAllUser();
    res.send(data);
};

