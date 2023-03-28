const {Sequelize,Model, INET, INTEGER, STRING, FLOAT,DataTypes}= require("sequelize");


let sequelize=require('../../common/dbConnection');


class CartItem extends Model{}

CartItem.init({
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER(),
    },
},{
    timestamps:true,
    paranoid:true,
    modelName: "CartItem",
    sequelize,
});


module.exports = CartItem;