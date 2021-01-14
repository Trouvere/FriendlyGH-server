const express = require('express');
const locationService = require('../services/location.service');

const location = () => {
  const router = express.Router();

  router.get('/', locationService.getLocations);
  router.get('/forUser', locationService.getLocationsForUser);
  router.get('/LocationByChat/:chatId', locationService.getLocationByChat);
  router.get('/ChatByLocation/:locationId', locationService.getChatByLocation);
  router.get('/:locationId', locationService.getLocation);

  return router;
};

module.exports = location;
