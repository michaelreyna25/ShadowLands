const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connections')

class Wild extends Model {}

Wild.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        attack: {
            type: DataTypes.INTEGER,
        },
        health: {
            type: DataTypes.INTEGER,
        },
        special: {
            type: DataTypes.INTEGER,
        },
        defense: {
            type: DataTypes.INTEGER,
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        prototype_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: 'prototype',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "wild",
    }
);

 module.exports = Wild;
