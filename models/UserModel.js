const {models} =require("../models/definitions");
const {Op}= require('sequelize');

module.exports={
    createUser: async function(body){
       // return body;
        const result=await models.User.create({...body});
        return result;
    },
    getAllUser: async function(body){
        const data= await models.User.findAll({
            include:{
                model: models.Roles
            },
            attributes: {exclude: ['password']}
        });
        return data;
    },
    getUserByID: async function(query){
        const data=await models.User.findAll({
            where: {
                id: query.id,
            },
            include:{
                model: models.Roles
            }
        });

        return data;
    },
    updateUser: async function(body){
        const data=await models.User.update(
            {...body},
            {
            where: {
                id: body.id,
            }
        }
        )
    },
    removeUser: async function(query){
        const data= await models.User.destroy({
            where: {
                id: query.id
            },
            force: true
        });
        if(data){
            return "Success"
        }
        return 'Fail';
       
    }, 
    // getUserByAttribute: async function(body){
    //     const result= await models.User.findAndCountAll({
    //         where:{
    //             [Op.or]:[
    //                 {userName:body.userName},
    //                 {email: body.email},
    //                 {phoneNo: body.phoneNo}
    //             ]
    //         }
    //     });
    //     return result;
    // }
}