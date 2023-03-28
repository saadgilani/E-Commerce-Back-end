const bcrypt=require("bcrypt");
const userModel=require("../models/UserModel");


module.exports={
    login: async function(password,hash){
        //let saltRounds=10;
       // const hash=bcrypt.hashSync(password,saltRounds);
        const match= await bcrypt.compare(password,hash)
        return match;
    },

    signup: async function(body){
        let saltRounds=10;
        body.password=bcrypt.hashSync(body.password,saltRounds);
        return body
    },

    createUser: async function(body){
        let saltrounds=10
        body.password=await bcrypt.hashSync(body.password,saltrounds);
        const data= await userModel.createUser(body);
        return data;
    },
    getAllUser: async function(){
        const data= await userModel.getAllUser();
        return data;
    },
    getUserByID: async function(query){
        const data= await userModel.getUserByID(query);
        return data;
    },
    updateUser: async function(body){
        const data=await userModel.updateUser(body);
        return data;
    },
    removeUser: async function(query){
        const data=await userModel.removeUser(query);
        return data;
    }

};