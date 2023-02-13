const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connections')

class Captured extends Model {}

Captured.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        location_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "captured",
    }
);

 module.exports = Captured;
