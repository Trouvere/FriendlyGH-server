const { Op } = require('sequelize');
const db = require('../models');
const usersHelper = require('./users.helper');

const Chat = db.chat;
const Interest = db.interest;

const getIdRecommendedChatsByGender = async (userGender) => {
  const mapGenderToChats = {
    male: ['gender1'],
    female: ['gender2']
  };
  const idRecommendedChatsByGender = await mapGenderToChats[
    userGender.dataValues.name
  ];
  const recommendedChatsByGender = await Chat.findOne({
    where: { id: idRecommendedChatsByGender }
  });
  return recommendedChatsByGender;
};

const getRecommendedChatsByInterests = async (userInterests) => {
  let recommendedChats = ['technologies2', 'technologies4'];
  await Promise.all(
    userInterests.map(async (el) => {
      if (!el) return;
      const chats = await el.getChats();
      recommendedChats = recommendedChats.concat(chats);
    })
  );
  return recommendedChats;
};

const getRecommendedChatsByInterestsAndLocationAndGender = async (
  userInterests,
  userLocation,
  userGender
) => {
  let recommendedChats = ['technologies2', 'technologies4'];
  await Promise.all(
    userInterests.map(async (el) => {
      if (!el) return;
      const chats = await el.getChats({
        where: {
          [Op.or]: [
            { locationId: userLocation.dataValues.name },
            { locationId: 'all' }
          ]
        }
      });
      recommendedChats = recommendedChats.concat(chats);
    })
  );

  const idRecommendedChatsByGender = await getIdRecommendedChatsByGender(
    userGender
  );
  recommendedChats = recommendedChats.concat(idRecommendedChatsByGender);

  return recommendedChats;
};

const getIdRecommendedChatsByRecommendedChats = (recommendedChats) => {
  const idRecommendedChats = recommendedChats.map((el) => {
    return el.dataValues.id;
  });

  return idRecommendedChats;
};
const getIdRecommendedChatsByInterests = async (userInterests) => {
  const recommendedChats = await getRecommendedChatsByInterestsAndLocationAndGender(
    userInterests
  );
  const idRecommendedChats = await getIdRecommendedChatsByRecommendedChats(
    recommendedChats
  );

  return idRecommendedChats;
};
const chatInterestRelation = async (idInterest, idChat) => {
  const interest = await Interest.findOne({ where: { id: idInterest } });
  if (!interest) return;
  const chat = await Chat.findOne({ where: { id: idChat } });
  if (!chat) return;
  await interest.addChat(chat);
};

const addChat = async (dataChat, users) => {
  const newChats = await Chat.create({
    name: dataChat.name,
    link: dataChat.link,
    messenger: dataChat.messenger,
    id: dataChat.id
  });
  if (dataChat.interest) {
    await chatInterestRelation(dataChat.interest, dataChat.id);
  }
  await Promise.all(
    users.map(async (user) => {
      await usersHelper.updateUser(user);
    })
  );
  return newChats;
};

module.exports.addChat = addChat;
module.exports.getRecommendedChatsByInterests = getRecommendedChatsByInterests;
module.exports.getIdRecommendedChatsByRecommendedChats = getIdRecommendedChatsByRecommendedChats;
module.exports.getIdRecommendedChatsByInterests = getIdRecommendedChatsByInterests;
module.exports.getRecommendedChatsByInterestsAndLocationAndGender = getRecommendedChatsByInterestsAndLocationAndGender;
module.exports.chatInterestRelation = chatInterestRelation;
