const cartModel=require("../models/cartModel");


module.exports={
    createCart: async function(body){
        const data=await cartModel.createCart(body);
        return data;
    },
    getAllCart: async function(){
        const data= await cartModel.getAllCart();
        return data;
    },
    getCartByID: async function(query){
        const data= await cartModel.getCartByID(query);
        return data;
    },
    updateCart: async function(body){
        const data= await cartModel.updateCart(body);
        return data;
    },
    removeCart: async function(query){
        const data= await cartModel.removeCart(query);
        return data;
    }

};