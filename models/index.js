const Boss = require('./Boss')
const Battle = require('./battle')
const Captured = require('./Captured')
const Location = require('./Location')
const Player = require('./Player')
const Prototype = require('./Prototype')
const User = require('./User')
const Wild = require('./Wild')

Boss.belongsTo(Location, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

Boss.belongsTo(Prototype, {
    foreignKey: 'prototype_id',
});

Captured.belongsTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Captured.belongsTo(Prototype, {
    foreignKey: 'prototype_id',
});

Location.hasMany(Player, {
    foreignKey: 'player_id',
});

Player.belongsTo(Location, {
    foreignKey: 'location_id',
});

Player.hasOne(Captured, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Prototype.hasMany(Captured, {
    foreignKey: 'prototype_id',
});

Prototype.hasMany(Wild, {
    foreignKey: 'prototype_id',
});

Prototype.hasMany(Boss, {
    foreignKey: 'prototype_id',
});

User.hasOne(Player, {
    foreignKey: 'user_id',
});

Wild.belongsTo(Location, {
    foreignKey: 'location_id',
});

Wild.belongsTo(Prototype, {
    foreignKey: 'prototype_id',
});


module.exports = {
    Captured, Battle, Boss, Player, Prototype, Location, User, Wild
}
