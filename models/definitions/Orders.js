const { sequelize, Model, INTEGER, STRING, DataTypes } = require("sequelize");
let sequelize = require('../../common/dbConnection');

class Orders extends Model {}

Orders.init({
    orderID: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerAddress:{
        type: DataTypes.STRING,
        allowNull: false
    },
    orderTotal: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true,
    modelName: "Orders",
    sequelize
});

module.exports=Orders;
