const router = require('express').Router();
const { Captured } = require('../../models');

router.get('/', async(req, res) => {
    try {
      const capturedData = await Captured.findAll();

      if (!capturedData)
      {res.status(404).json({message: 'No captured data was retrieved.'})
      return}

      const captured =  capturedData.map(captured => captured.get ({plain: true}));

      res.status(200).json(captured);
    } catch (err) {
        res.status(500).json(err);}
});

router.get('/:id', async(req, res)=> {
    try {
       const capturedData = await Captured.findByPk(req.params.id);

       if (!capturedData)
       {res.status(404).json({message: 'No captured data was retrieved.'})
       return}

      const captured = capturedData.get ({plain: true})
      res.status(200).json(captured);
    } catch (err){
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
  try {
    const newCapturedData = await Captured.create(req.body)

    res.status(200).json(newCapturedData)

  } catch (err) {
    res.status(500).json(err)};
});

router.put('/:id', async (req, res) => {
  try{
    const { id }= req.params;
    const [update] = await Captured.update(req.body, { where: {id} });

    if(!update) {
      return res.status(404).json({message: 'No updated information provided'});
    }

    const updatedCaptured = await Captured.findByPk(id);
    return res.status(200).json(updatedCaptured);
  } catch (err){
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a Captured by its `id` value
  try {
    // Delete the Captured with the given `id` from the database
    const deleted = await Captured.destroy({ where: { id: req.params.id } });

    // If the Captured is not found, return a 404 response with a message
    if (!deleted) {
      return res.status(404).json({ message: "Captured monster not found" });
    }

    // const updatedCaptured = await Captured.findAll();
    // return res.status(200).json(updatedCaptured);
    
    // Return a success message in the response
    return res.status(200).json({ message: "Captured monster deleted successfully" });
  } catch (err) {
    // In case of any errors, return a 400 response with the error message
    return res.status(400).json(err);
  }
});


module.exports = router;
