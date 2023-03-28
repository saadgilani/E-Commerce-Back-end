const {Sequelize,Model, INET, INTEGER, STRING, FLOAT,DataTypes}= require("sequelize");


let sequelize=require('../../common/dbConnection');


class Cart extends Model{}

Cart.init({
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER(),
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    total:{
        allowNull:false,
        type:DataTypes.FLOAT(),
    },
},{
    timestamps:true,
    paranoid:true,
    modelName: "Cart",
    sequelize,
});


module.exports = Cart;