const {models} =require("../models/definitions");

module.exports={
    createCart: async function(body){
       // return body;
        const result=await models.Cart.create({...body});
        return result;
    },
    getAllCart: async function(){
        const data= await models.Cart.findAll();
        return data;
    },
    getCartByID: async function(query){
        const data=await models.Cart.findAll({
            where: {
                id: query.id,
            },
        });

        return data;
    },
    updateCart: async function(body){
        const data=await models.Cart.update(
            {...body},
            {
            where: {
                id: body.id,
            }
        }
        )
    },
    removeCart: async function(query){
        const data= await models.Cart.destroy({
            where: {
                id: query.id
            },
            force: true
        })
        return 'Cart deleted';
    }
}