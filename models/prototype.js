const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connections')

class Prototype extends Model {}

Prototype.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        picture: {
            type: DataTypes.STRING,
            unique: true,
        },
        base_attack: {
            type: DataTypes.INTEGER,
        },
        base_health: {
            type: DataTypes.INTEGER,
        },
        base_defense: {
            type: DataTypes.INTEGER,
        },
        base_speical: {
            type: DataTypes.DECIMAL,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "prototype",
    }
);

module.exports = Prototype;
