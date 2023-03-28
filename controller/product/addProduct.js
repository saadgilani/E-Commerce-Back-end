const productService=require("../../service/productService")

module.exports= async function(req,res){
    const data= await productService.addProduct(req.body);
    res.send(data);
}