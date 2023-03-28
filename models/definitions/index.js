const Sequelize = require('sequelize')
var config = require("../../config.json");
const db = {};
config = config.db;
let sequelize = require("../../common/dbConnection");
const User  = require("../definitions/User");
const Roles= require("./Roles");
const Cart=require("./Cart");
const CartItem=require("./CartItem");
const Product=require("./Product");
// console.log(sequelize);

//should create roleID foreing key inside User table
Roles.hasMany(User,{onDelete: 'CASCADE',foreignKey: 'roleID'});
User.belongsTo(Roles,{onDelete: 'CASCADE',foreignKey:'roleID'});

User.hasOne(Cart,{onDelete:'CASCADE',foreignKey:'userID'});
Cart.belongsTo(User,{onDelete:'CASCADE',foreignKey:'userID'});

// Cart.belongsToMany(Product,{through: CartItem, onDelete: 'CASCADE'});
// Product.belongsToMany(Cart, {through: CartItem,onDelete: 'CASCADE' });

Product.hasMany(CartItem,{onDelete:"CASCADE",foreignKey: 'productID'});
CartItem.belongsTo(Product,{onDelete: 'CASCADE',foreignKey:'productID'});


Cart.hasMany(CartItem,{onDelete:"CASCADE",foreignKey: 'cartID'});
CartItem.belongsTo(Cart,{onDelete: 'CASCADE',foreignKey:'cartID'});

const models = {
  User,
  Roles,
  Cart,
  CartItem,
  Product,
};

sequelize.models=models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports = {db, models};