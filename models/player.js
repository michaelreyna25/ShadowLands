const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connections')

class Player extends Model {}

Player.init(
    {
        // id:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true,
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        progress: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min:0,
                max:2
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "player",
    }
);

module.exports = Player;
