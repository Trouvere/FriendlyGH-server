const express = require('express');
const interestService = require('../services/interest.service');

const interest = () => {
  const router = express.Router();

  router.get('/', interestService.getInterests);
  router.post('/', interestService.postNewInterest);
  router.post('/forAdmin', interestService.postNewInterestForAdmin);
  return router;
};

module.exports = interest;
