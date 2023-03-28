const {models} =require("../models/definitions");
const jwtSecret = require ('../config.json');
const jwt = require ('jsonwebtoken');

let refreshTokens = []
let revokedTokens = new Set();
function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' })
}


module.exports={
    createRole: async function(body){
       // return body;
        const result=await models.Roles.create({...body});
        return result;
    },
    login: async function(body){
        console.log(body);
        let user = await models.User.findOne({
            where:{
                userName:body.userName
            }
        })
        user = user.dataValues;
        const accessToken = generateAccessToken(user)
        const token = jwt.sign(user, jwtSecret.jwt.secret)
        refreshTokens.push(token)
        return({accessToken: accessToken, refreshTokens:token})
    },
    // logout: async function (body) {
    //     revokedTokens.add(body.token);
    //     refreshTokens = refreshTokens.filter(token => token !== body.token);
    //     return { refreshTokens: refreshTokens }
    //   },
    //   isValidToken: function (token) {
    //     return !revokedTokens.has(token) && jwt.verify(token, jwtSecret.jwt.secret);
    //   },    
    // logout: async function(token) {
    //     // Add the token ID to the blacklist or revocation list
    //     const tokenData = jwt.decode(token);
    //     await addToBlacklist(tokenData.jti);
    //     // Remove the refresh token from the refreshTokens array
    //     const index = refreshTokens.indexOf(token);
    //     if (index !== -1) {
    //       refreshTokens.splice(index, 1);
    //     }
    //   },
    logout: async function(body){
        refreshTokens=refreshTokens.filter(token=>token!==body.token)
        return({refreshTokens:refreshTokens})
    }
}