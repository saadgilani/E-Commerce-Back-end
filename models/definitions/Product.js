const { Sequelize, Model, INTEGER, STRING, TEXT, DataTypes } = require("sequelize");
let sequelize = require('../../common/dbConnection');

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false    },
    title: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT(),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    image:{
        type: DataTypes.STRING(100000),
    },
}, {
    timestamps: true,
    paranoid: true,
    modelName:"Product",
    sequelize
});

module.exports=Product
