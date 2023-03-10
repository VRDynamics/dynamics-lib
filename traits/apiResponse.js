/**
 *
 * @param data
 * @param code
 * @param meta
 * @returns {{code: number, data: null, meta: null, error: boolean, message: (null|string)}}
 */
const constructResponse = (data = null, code = 200, meta = null) => {
    return {
        message: code >= 400 ? 'Error' : 'Success',
        data: data,
        meta: meta,
    }
};

/**
 *
 * @param data
 * @param code
 * @param meta
 * @returns {{body: {code: number, data: null, meta: null, error: boolean, message: (null|string)}, statusCode: number}}
 */
exports.apiResponse = (data = null, code = 200, meta = null) => {

    const dataResponse = constructResponse(data, code, meta);
    return {
        statusCode: code,
        body: dataResponse
    }
};