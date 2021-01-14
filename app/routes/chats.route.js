const express = require('express');
const chatsService = require('../services/chats.service');
const { authJwt } = require('../middleware');

const chats = () => {
  const router = express.Router();

  router.get('/allChats', chatsService.getChats);
  router.get('/recommendedChats/:userId', chatsService.getRecommended);
  router.post('/', [authJwt.verifyAdminToken], chatsService.postNewChat);
  router.delete(
    '/:chatId',
    [authJwt.verifyAdminToken],
    chatsService.deleteChat
  );
  return router;
};
module.exports = chats;
