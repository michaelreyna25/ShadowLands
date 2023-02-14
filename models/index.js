const Boss = require('./Boss')
const Captured = require('./Captured')
const Journey = require('./progress')
const Location = require('./Location')
const Player = require('./Player')
const Prototype = require('./Prototype')
const User = require('./User')
const Wild = require('./Wild')

Boss.belongTo(Location, {
    foreignKey: 'location_id',
});

Boss.belongTo(Prototype, {
    foreignKey: 'prototype',
});

Captured.belongTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Captured.belongTo(Prototype, {
    foreignKey: 'prototype_id',
    onDelete: 'CASCADE'
});

Journey.hasMany(Player, {
    foreignKey: 'player_id',
});

Journey.belongTo(Location, {
    foreignKey: 'location_id',
});

Location.hasMany(Player, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Player.belongTo(Location, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

Player.hasOne(Captured, {
    foreignKey: 'captured_id',
    onDelete: 'CASCADE'
});

Prototype.hasMany(Captured, {
    foreignKey: 'captured_id',
    onDelete: 'CASCADE'
});

Prototype.hasMany(Wild, {
    foreignKey: 'wild_id',
    onDelete: 'CASCADE'
});

Prototype.hasMany(Boss, {
    foreignKey: 'boss_id',
    onDelete: 'CASCADE'
});

User.hasOne(Player, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Wild.belongTo(Location, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

Wild.belongTo(Prototype, {
    foreignKey: 'prototype_id',
});

module.exports = {
    Player,
    Boss,
    Captured,
    Journey,
    Location,
    User,
    Wild,
    Prototype
}