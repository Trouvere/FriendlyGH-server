const db = require('../models');

const Tag = db.tag;

const tagService = {
  getTags: async (req, res) => {
    try {
      // get all interests
      const tags = await Tag.findAll();

      res.send(tags);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
};

module.exports = tagService;
