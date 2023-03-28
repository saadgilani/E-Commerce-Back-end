const {Model, DataTypes, Sequelize}= require("sequelize");


let sequelize = require('../../common/dbConnection');

class Roles extends Model{}

Roles.init(
    {
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER(),
    },
    type:{
        allowNull:false,
        type:DataTypes.STRING()
    },
},
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName: "Roles"
    }
);


module.exports = Roles