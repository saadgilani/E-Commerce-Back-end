const cartService=require("../../service/cartService")

module.exports= async function(req,res){
    const data= await cartService.updateCart(req.body);
    res.send(data);
}