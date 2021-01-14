const { Op } = require('sequelize');
const db = require('../models');

const Location = db.location;
const Chat = db.chat;

const findLocation = async (res, locationId) => {
  await Location.findOne({
    where: {
      name: locationId
    }
  });
};
const findChat = async (res, chatId) => {
  await Chat.findOne({
    where: {
      id: chatId
    }
  });
};

const locationService = {
  getLocations: async (req, res) => {
    try {
      // get all locations
      const locations = await Location.findAll();
      res.send(locations);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },

  getLocationsForUser: async (req, res) => {
    try {
      // get all locations without all
      const locations = await Location.findAll({
        where: {
          name: { [Op.ne]: 'all' }
        }
      });
      // const locationsID = locations.map((el) => {
      //   return el.dataValues.name;
      // });
      res.send(locations);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  getLocation: async (req, res) => {
    try {
      // Get Location with params.id
      await findLocation(res, req.params.locationId);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  getLocationByChat: async (req, res) => {
    try {
      const chat = await findChat(res, req.params.chatId);
      const locations = chat.getLocations();
      res.send(locations);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  getChatByLocation: async (req, res) => {
    try {
      const location = await findLocation(res, req.params.locationId);
      const chats = await location.getChats();
      res.send(chats);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
};

module.exports = locationService;
