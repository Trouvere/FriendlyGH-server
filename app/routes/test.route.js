const express = require('express');

const test = () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.json({ message: 'Test Friendly!' });
  });

  return router;
};
module.exports = test;
