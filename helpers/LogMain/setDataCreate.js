const db = require("../../config/db");
const LogMain = require('../../models/LogMain')(db.sequelize, db.Sequelize);

/**
 *
 * @param tableData
 * @param action
 * @param createdBy
 * @param initialStructure
 * @param finalStructure
 * @returns {Promise<void>}
 */
exports.setDataCreateLogMain = async(tableData = "", action = "", createdBy = 0, initialStructure = null, finalStructure = null) => {
    const data = {
        table: tableData,
        type: action,
        payload_initial: initialStructure,
        payload_final: finalStructure,
        created_by: createdBy,
    };
    await LogMain.create(data);
}