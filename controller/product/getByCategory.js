const productService=require("../../service/productService")

module.exports= async function(req,res){
    const data= await productService.getByCategory(req.query.categoryName);
    res.send(data);
}