const productService=require("../../service/productService")

module.exports= async function(req,res){
    const data= await productService.getCategories();
    res.send(data);
}