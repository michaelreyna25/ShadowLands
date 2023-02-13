const Boss = require('./Boss')
const Captured = require('./Captured')
const Index = require('./Index')
const Journey = require('./Journey')
const Location = require('./Location')
const Player = require('./Player')
const Prototype = require('./Prototype')
const User = require('./User')
const Wild = require('./Wild')

Boss.belongTo()






Captured.belongTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE'
});

Captured.belongTo(Prototype, {
    foreignKey: 'prototype_id',
    onDelete: 'CASCADE'
});

Journey.hasMany(Player, {

})
