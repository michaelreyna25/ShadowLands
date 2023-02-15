const router = require("express").Router();

const {
  Battle,
  Captured,
  Location,
  Player,
  Prototype,
  Boss,
  User,
  Wild,
} = require("../../models");

router.get("/", async (req, res) => {
  try {
    const battleArr = await Battle.findAll();
    const battle = battleArr.map((battle) => battle.get({ plain: true }));

    res.status(200).json(battleArr);
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
  // router.post("/", withAuth, async (req, res) => {
  try {
    const { type } = req.body;
    const { id } = req.body;
    const opponent =
      type === "Wild"
        ? await Wild.findByPk(id)
        : await Boss.findByPk(id);
    console.log("opponent: plain:false", opponent);
    if (!opponent) {
      res.status(404).json({ message: "No opponent found with that id!" });
      return;
    }
    const opp = opponent.get({ plain: true });
    console.log("------opp: plain:true ----", opponent);

    // const playerData = await Player.findByPk(req.session.player.id, {
      //rec.sess
    const playerData = await Player.findByPk(5, {
      //rec.sess
      include: [{ model: Captured, where: { id: 5 } }],
    });
    console.log("playerData: plain:false", playerData);
    if (!playerData) {
      res
        .status(404)
        .json({ message: "No player/captured monster found with that id!" });
      return;
    }
    const player = playerData.get({ plain: true });
    console.log("------player: plain:true ----", player);
    console.log(" V v V v V v V v V creating-Battle V v V v V v V v V v V");
    const newBattle = await Battle.create({
      captured_id: player.captured.id,
      // captured_id: player.captured.name,
      captured_attack: player.captured.attack,
      captured_health: player.captured.health,
      opponent_type: type,
      opponent_attack: opp.attack,
      opponent_health: opp.health,
    });

    console.log("---A---R---E---N---A---", newBattle);
    res.status(200).json(newBattle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
// router.put("/:id", withAuth, async (req, res) => {
  // update an Battle by its `id` value
  try {
    const { id } = req.params;
    const [updated] = await Battle.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({
        message:
          "No Battle with that ID can be updated with the infomation provided",
      });
    }

    const updatedBattle = await Battle.findByPk(id);
    return res.status(200).json(updatedBattle);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
// router.delete("/:id", withAuth, async (req, res) => {
  // delete an Battle by its `id` value
  try {
    // Delete the Battle with the given `id` from the database
    const deleted = await Battle.destroy({ where: { id: req.params.id } });

    // If the Battle is not found, return a 404 response with a message
    if (!deleted) {
      return res.status(404).json({ message: "Battle not found" });
    }

    // const updatedA rena = await Battle.findAll();
    // return res.status(200).json(updatedBattle);

    // Return a success message in the response
    return res.status(200).json({ message: "Battle deleted successfully" });
  } catch (err) {
    // In case of any errors, return a 400 response with the error message
    return res.status(400).json(err);
  }
});

module.exports = router;
