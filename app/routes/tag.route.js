const express = require('express');
const tagService = require('../services/tag.service');

const tag = () => {
  const router = express.Router();

  router.get('/', tagService.getTags);

  return router;
};

module.exports = tag;
