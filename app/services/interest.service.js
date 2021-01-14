const db = require('../models');

const Interest = db.interest;

const interestService = {
  getInterests: async (req, res) => {
    try {
      // get all interests
      const interests = await Interest.findAll();

      res.send(interests);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  postNewInterest: async (req, res) => {
    try {
      await Interest.create({
        name: req.body.name,
        tagId: 'other',
        id: req.body.name
      });

      res.send(`Interests ${req.body.name} has been added`);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  postNewInterestForAdmin: async (req, res) => {
    try {
      await Interest.create({
        name: req.body.name,
        tagId: req.body.tag,
        id: req.body.id
      });

      res.send(`Interests ${req.body.name} has been added`);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
};

module.exports = interestService;
