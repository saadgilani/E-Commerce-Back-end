const roleService=require("../../service/roleService")

module.exports= async function(req,res){
    const data= await roleService.login(req.body);
    res.send(data);
}