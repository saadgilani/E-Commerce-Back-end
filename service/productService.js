const productModel=require("../models/productModel");


module.exports={
    addProduct: async function(body){
        const data=await productModel.addProduct(body);
        return data;
    },
    getAllProducts: async function(){
        const data= await productModel.getAllProducts();
        return data;
    },
    getProductByID: async function(query){
        const data= await productModel.getProductByID(query);
        return data;
    },
    updateProduct: async function(body){
        const data= await productModel.updateProduct(body);
        return data;
    },
    removeProduct: async function(query){
        const data= await productModel.removeProduct(query);
        return data;
    },
    getCategories: async function(){
        const data= await productModel.getCategories();
        return data;
    },
    getByCategory: async function(categoryName){
        const data= await productModel.getByCategory(categoryName);
        return data;
    },
    addManyProducts: async function(body){
        const data= await productModel.addManyProducts(body);
        return data;
    }

};