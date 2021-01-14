/* eslint-disable node/no-unsupported-features/es-builtins */
const chatsHelper = require('../helpers/chats.helper');

const chatInterestCreator = async () => {
  return Promise.allSettled([
    chatsHelper.chatInterestRelation('football', 'sport4'),
    chatsHelper.chatInterestRelation('football', 'sport5'),
    chatsHelper.chatInterestRelation('football', 'sport2'),
    chatsHelper.chatInterestRelation('basketball', 'sport1'),
    chatsHelper.chatInterestRelation('volleyball', 'sport3'),
    chatsHelper.chatInterestRelation('xBox', 'eSport1'),
    chatsHelper.chatInterestRelation('apple', 'technologies1'),
    chatsHelper.chatInterestRelation('family', 'homeAndFamily1'),
    chatsHelper.chatInterestRelation('travel', 'travel1'),
    chatsHelper.chatInterestRelation('poker', 'gambling1'),
    chatsHelper.chatInterestRelation('poker', 'gambling2'),
    chatsHelper.chatInterestRelation('climbing', 'recreation3'),
    chatsHelper.chatInterestRelation('carting', 'recreation5'),
    chatsHelper.chatInterestRelation('sauna', 'recreation4'),
    chatsHelper.chatInterestRelation('sauna', 'recreation1')
  ]);
};

module.exports = chatInterestCreator;
