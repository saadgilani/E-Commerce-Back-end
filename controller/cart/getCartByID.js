const cartService=require("../../service/cartService")

module.exports= async function(req,res){
    const data= await cartService.getCartByID(req.query);
    res.send(data);
}