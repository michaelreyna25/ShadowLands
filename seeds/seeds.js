const sequelize = require("../config/connection");
const { Captured, Boss, Player, Prototype, Location, User, Wild } = require("../models");

const boss = require("./boss.json");
const captured = require("./captured.json");
const location = require("./location.json");
const player = require("./player.json");
const prototype = require("./prototype.json");
const user = require("./user.json");
const wild = require("./wild.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(user);
  await Location.bulkCreate(location);
  await Player.bulkCreate(player);
  await Prototype.bulkCreate(prototype);
  await Wild.bulkCreate(wild);
  await Boss.bulkCreate(boss);
  await Captured.bulkCreate(captured);

  process.exit(0);
};

seedDatabase();
