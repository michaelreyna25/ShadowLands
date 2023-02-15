const router = require("express").Router();
// const withAuth = require('../utils/auth');

const {
  Battle,
  Captured,
  Location,
  Player,
  Prototype,
  Boss,
  User,
  Wild,
} = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const battleData = await renderGamestate(id);
    console.log("Battle Data: ", ...battleData)
    res.render(...battleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

async function renderGamestate(p_id) {
  let html;
  let data;
  //rec.session.id
  const { progress, captured } = await Player.findByPk(5, {
    //rec.session.id
    include: [{ model: Captured, where: { player_id: 5 } }],
  });
  const cap = captured.get({plain : true})
  switch (progress) {
    case 0:
      //set handlbars template
      //get the current Location its associated data
      //associated data: intro description
      //associated data: wild monster array
      const introData = await Location.findByPk(p_id, {
        include: [
          { model: Wild, where: { location_id: p_id } },
          { model: Boss, where: { location_id: p_id } },
        ],
      });
      const { intro, wilds, bosses } = introData.get({ plain: true });
      const mydata = introData.get({ plain: true });
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=`entered: ", mydata)
      

      //randomly select index of wild monster and boss
      const opponent = Math.floor(Math.random() * wilds.length);
      const beast = Math.floor(Math.random() * bosses.length);

      //update table attributes
      // await Location.update(
      //   { opponent_id: wilds[opponent].id, beast_id: bosses[beast].id },
      //   { where: { id: p_id } }
      // );

      console.log("Entered Case 0");
      console.log("p_id", p_id);
      console.log("opponent", opponent);
      console.log("shadowbeat", bosses);

      html = "intro";
      data = {
        intro,
        wild_id: wilds[opponent].id,
        beast_id: bosses[beast].id,
      };
      //console.log({intro, wild_id: wilds[opponent].id, beast_id: bosses[beast].id})
      break;

    case 1:
      //const battleData = await battle.findByPk(p_id);
      //html = "battle";
      //data = battleData.get({ plain: true });

      const battleArr = await Battle.findAll();
      html = "Battle";
      data = battleArr[battleArr.length - 1].get({ plain: true });

      console.log("Entered Case 1", data);
      break;
    case 2:
      var { conc } = await Location.findByPk(p_id);

      html = "conc";
      data = { conc, cap };
// console.log( data)
      break;
    default:
  }
   console.log( "return value: ", html.toString() , " + " , data, "||")
  return [html, data];
}

module.exports = router;
