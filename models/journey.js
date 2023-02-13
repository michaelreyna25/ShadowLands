const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connections')

class Journey extends Model {}

Journey.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
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
        modelName: "journey",
    }
);

 module.exports = Journey; 
