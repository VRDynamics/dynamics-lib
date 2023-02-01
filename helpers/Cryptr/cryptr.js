const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
const { setDataCreateLogMain } = require('../LogMain/setDataCreate');

/**
 * @param body
 * @returns {Promise<void>}
 */
exports.encryptBody = async(body) => {
    let resp = null;
    try {
        resp = cryptr.encrypt(JSON.stringify(body));
    } catch (error) {
        const message = error.message || error;
        await setDataCreateLogMain('Cryptr', 'Encrypt service Fail', 1, message, null);
    }

    return resp;
};

/**
 * @param body
 * @returns {Promise<void>}
 */
 exports.decryptBody = async(body) => {
    let resp = null;
    try {
        resp = JSON.parse(cryptr.decrypt(body.data));
    } catch (error) {
        const message = error.message || error;
        await setDataCreateLogMain('Cryptr', 'Decrypt service Fail', 1, message, null);
    }

    return resp;
};

/**
 * @param value
 * @returns {Promise<void>}
 */
exports.encryptValue = async(value) => {
    let resp = null;
    try {
        resp = cryptr.encrypt(JSON.stringify(value));
    } catch (error) {
        const message = error.message || error;
        await setDataCreateLogMain('Cryptr', 'Encrypt service Fail', 1, message, null);
    }

    return resp;
};

/**
 * @param value
 * @returns {Promise<void>}
 */
 exports.decryptValue = async(value) => {
    let resp = null;
    try {
        resp = JSON.parse(cryptr.decrypt(value));
    } catch (error) {
        const message = error.message || error;
        await setDataCreateLogMain('Cryptr', 'Decrypt service Fail', 1, message, null);
    }

    return resp;
};

