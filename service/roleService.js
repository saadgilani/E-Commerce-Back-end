const roleModel=require("../models/roleModel");


module.exports={
    createRole: async function(body){
        const data=await roleModel.createRole(body);
        return data;
    },
    login: async function(body){
        const data=await roleModel.login(body);
        return data;
    },
    logout:async function(body){
        const data=await roleModel.logout(body);
        return data;
    }
    // createToken: async function(body){
    //     const data=await roleModel.createToken(body);
    //     return data;
    // }

};