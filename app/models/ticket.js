"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define('ticket', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,             
                primaryKey: true,
                unique: true
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            desc: {
                type: Sequelize.STRING,
                allowNull: false
            },
            avaliable: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            bought: {
                type: Sequelize.INTEGER,
                allowNull: true
            }
        },
        {
            freezeTableName: true // Model tableName will be the same as the model name
        }
    ); return Ticket;
};