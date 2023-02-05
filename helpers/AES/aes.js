const AES = require('mysql-aes');
const { setDataCreateLogMain } = require('../LogMain/setDataCreate');

/**
 * @param value
 * @returns {Promise<void>}
 */
exports.encrypt = async(value) => {
    try {
        return AES.encrypt(JSON.stringify(value), process.env.AES_SECRET);
    } catch (error) {
        setDataCreateLogMain('AES', 'AES error encrypt', 1, error, null);
    }
};

/**
 * @param value
 * @returns {Promise<void>}
 */
exports.decrypt = async(value) => {
    try {
        return JSON.parse(AES.decrypt(value, process.env.AES_SECRET));
    } catch (error) {
        setDataCreateLogMain('AES', 'AES error decrypt', 1, error, null);
    }
};