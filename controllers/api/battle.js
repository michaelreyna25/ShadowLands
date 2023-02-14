const router = require("express").Router();
const withAuth = require('../../utils/auth');

const {
  Battle,
  Captured,
  Player,
  Boss,
  Wild,
} = require("../../models");

router.get("/", async (req, res) => {
  try {
    const battleArr = await Battle.findAll();
    const battle = battleArr.map((battle) => battle.get({ plain: true }));

    res.status(200).json(battle);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params.id);
  try {
    const battleArr = await Battle.findByPk(id);
    console.log(battleArr);
    if (!battleArr) {
      res.status(404).json({ message: "No battle was found with that id!" });
      return;
    }

    res.status(200).json(battleArr);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { type } = req.body;
    // console.log("line 43 - type: (Wild/Beast)", type)
    const { id } = req.body;
    const opponent =
      type === "Wild"
        ? await Wild.findByPk(id)
        : await Boss.findByPk(id);
// console.log("opponent: plain:false", opponent)
    if (!opponent) {
      res.status(404).json({ message: "No opponent found with that id!" });
      return;
    }
    const opp = opponent.get({ plain: true });
    // console.log("------opp: plain:true ----", opponent)

    // const playerData = await Player.findByPk(req.session.player.id, {
      //rec.sess
    const playerData = await Player.findByPk(5, {
      //rec.sess
      include: [{ model: Captured, where: { id: 5 } }],
    });
// console.log("playerData: plain:false", playerData)
    if(!playerData) {
    res.status(404).json({ message: "No player/captured monster found with that id!" });
    return;
  }
    const player = playerData.get({ plain: true });
    // console.log("------player: plain:true ----", player)
    const newbattle = await Battle.create({
      captured_id: player.captured.id,
      // captured_id: player.captured.name,
      captured_attack: player.captured.attack,
      captured_health: player.captured.health,
      opponent_type: type,
      opponent_attack: opp.attack,
      opponent_health: opp.health,
    });

    // console.log("---A---R---E---N---A---", newbattle)
    res.status(200).json(newbattle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update an battle by its `id` value
  try {
    const { id } = req.params;
    const [updated] = await Battle.update(req.body, { where: { id } });

    if (!updated) {
      return res
        .status(404)
        .json({
          message:
            "No battle with that ID can be updated with the infomation provided",
        });
    }

    const updatedbattle = await Battle.findByPk(id);
    return res.status(200).json(updatedbattle);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete an battle by its `id` value
  try {
    // Delete the battle with the given `id` from the database
    const deleted = await Battle.destroy({ where: { id: req.params.id } });

    // If the battle is not found, return a 404 response with a message
    if (!deleted) {
      return res.status(404).json({ message: "Battle not found" });
    }

    // const updatedA rena = await battle.findAll();
    // return res.status(200).json(updatedbattle);

    // Return a success message in the response
    return res.status(200).json({ message: "Battle deleted successfully" });
  } catch (err) {
    // In case of any errors, return a 400 response with the error message
    return res.status(400).json(err);
  }
});

module.exports = router;
