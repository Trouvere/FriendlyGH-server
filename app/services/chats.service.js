const db = require('../models');
const chatsHelper = require('../helpers/chats.helper');

const Chats = db.chat;
const User = db.user;

const chatsService = {
  getChats: async (req, res) => {
    try {
      const chats = await Chats.findAll();
      const chatsObj = chats.map((el) => {
        const { id, name, link, messenger } = el;
        return { id, name, link, messenger };
      });
      res.send({ chatsObj });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },

  getRecommended: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.userId
        }
      });

      const recommendedChats = await user.getChats();
      const idRecommendedChats = chatsHelper.getIdRecommendedChatsByRecommendedChats(
        recommendedChats
      );
      res.send({
        recommendedChats: idRecommendedChats
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },

  postNewChat: async (req, res) => {
    try {
      const users = await User.findAll();
      await chatsHelper.addChat(req.body, users);
      res.send(`chats ${req.body.name} has been added`);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },

  deleteChat: async (req, res) => {
    try {
      await Chats.destroy({
        where: {
          id: req.params.chatId
        }
      });
      res.send(`chat ${req.params.chatId} deleted`);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
};

module.exports = chatsService;
