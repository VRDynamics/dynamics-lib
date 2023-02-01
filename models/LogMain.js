const moment = require('moment-timezone');
const now = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss');

/**
 *
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
const model = (sequelize, DataTypes) => {
    return sequelize.define('LogMain', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING(191),
            allowNull: false,
        },
        payload_initial: {
            type: DataTypes.JSON,
            allowNull: false
        },
        payload_final: {
            type: DataTypes.JSON,
            allowNull: true
        },
        table: {
            type: DataTypes.STRING(191),
            allowNull: false,
        },
        created_by: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: now,
            allowNull: false
        }
    }, {
        indexes: [
            { unique: false, fields: ["created_by"] },
        ],
        tableName: "log_main"
    });
}

module.exports = model;