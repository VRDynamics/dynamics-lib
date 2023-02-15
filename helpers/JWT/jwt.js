const jwt = require('jsonwebtoken');
const { setDataCreateLogMain } = require('../LogMain/setDataCreate');

/**
 * @returns {Promise<void>}
 */
exports.generateAccessToken = async(user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET,{expiresIn: process.env.TOKEN_EXPIRES});
};

/**
 * @param user
 * @returns {Promise<void>}
 */
 exports.validateAccessToken = async(req, res, next) => {
    let resError = false;
    let resData = null;
    let response = null;
    
    const accessToken = (req.headers['Authorization']) ? req.headers['Authorization'] : req.headers['authorization'];

    if(!accessToken) {
        resError = true;
        response = "Access denied";
    } else {
        jwt.verify(accessToken, process.env.TOKEN_SECRET,(error, data) => {
            if (error) {
                setDataCreateLogMain('Token', 'Token expired or incorrect', 1, error, null);
                resError = true;
                response = "Access denied, token expired or incorrect";
            } else {
                resData = data;
            }
        });
    }

    return (resError) ? { error: resError, message: response } : { data: resData };
};