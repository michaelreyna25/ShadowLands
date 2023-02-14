const sequelize = require("../config/connection");
const { Captured, Boss, Player, Prototype, Location, User, Wild } = require("../models");

const captured = require("./captured.json");
const boss = require("./boss.json");
const player = require("./player.json");
const prototype = require("./prototype.json");
const location = require("./location.json");
const wild = require("./wild.json");
const user = require("./user.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(user);
  await Player.bulkCreate(player);
  await Location.bulkCreate(location);
  await Prototype.bulkCreate(prototype);
  await Wild.bulkCreate(wild);
  await Boss.bulkCreate(boss);
  await Captured.bulkCreate(captured);
  
  process.exit(0);
};

seedDatabase();