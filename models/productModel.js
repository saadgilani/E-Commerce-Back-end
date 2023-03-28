const { func } = require("joi");
const {models} =require("../models/definitions");
const { sequelize } = require("./definitions/Product");

module.exports={
    addProduct: async function(body){
       // return body;
        const result=await models.Product.create({...body});
        return result;
    },
    getAllProducts: async function(){
        const data= await models.Product.findAll();
        return data;
    },
    getProductByID: async function(query){
        const data=await models.Product.findOne({
            where: {
                id: query.id,
            },
        });

        return data;
    },
    updateProduct: async function(body){
        const data=await models.Product.update(
            {...body},
            {
            where: {
                id: body.id,
            }
        }
        )
    },
    removeProduct: async function(query){
        const data= await models.Product.destroy({
            where: {
                id: query.id
            },
            force: true
        })
        return 'Product deleted';
    },
    getCategories: async function(){
        const data= await models.Product.findAll(
            //fetches categories distinctly only once
            {attributes: [[sequelize.fn('DISTINCT',sequelize.col('category')),'category']]}
        ).then((categories) => {
            const categoryNames = categories.map((category) => category.category);
            return categoryNames;
          })
        return data;
    },
    getByCategory: async function(categoryName){
        const data= await models.Product.findAll(
            {
                where:{
                    category:categoryName
                }
            }
        )
        return data;
    },
    addManyProducts: async function(products){
        try {
            const result = await models.Product.bulkCreate(products);
            return result;
          } catch (error) {
            console.error(error);
            throw error;
          }
        // const results = [];
        // for (const product of products) {
        //   const result = await models.Product.create(product);
        //   results.push(result);
        // }
        // return results;
    }
}