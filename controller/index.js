module.exports={
    //user code
    //login:require("./users/login"),
    signUp:require('./users/SignUp'),
    CreateUser: require('./users/CreateUser'),
    getUser: require('./users/getUser'),
    getUserByID: require('./users/getUserByID'),
    updateUser: require('./users/updateUser'),
    removeUser: require('./users/removeUser'),
    //Role code
    CreateRole: require('./roles/CreateRole'),
    login: require('./roles/login'),
    logout: require('./roles/logout'),
    //Product code
    addProduct: require('./product/addProduct'),
    getAllProducts: require('./product/getAllProducts'),
    getProductByID: require('./product/getProductByID'),
    updateProduct:require('./product/updateProduct'),
    removeProduct: require('./product/removeProduct'),
    getCategories: require('./product/getCategories'),
    getByCategory: require('./product/getByCategory'),
    addManyProducts: require('./product/addManyProducts'),

    //cart code
    createCart: require('./cart/createCart'),
    getAllCart: require('./cart/getAllCart'),
    getCartByID: require('./cart/getCartByID'),
    updateCart:require('./cart/updateCart'),
    removeCart: require('./cart/removeCart'),
};