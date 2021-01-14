/* eslint-disable node/no-unsupported-features/es-builtins */
const db = require('../models');

const Chat = db.chat;

const chatsCreator = {
  sport() {
    return Promise.allSettled([
      Chat.create({
        name: 'Баскетбол',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        locationId: 'Minsk',
        messenger: 'skype',
        id: 'sport1'
      }),
      Chat.create({
        name: 'Silver kicker',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'sport2'
      }),
      Chat.create({
        name: 'Волейбол',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        locationId: 'Minsk',
        messenger: 'skype',
        id: 'sport3'
      }),
      Chat.create({
        name: 'Футбол',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        locationId: 'Minsk',
        messenger: 'skype',
        id: 'sport4'
      }),
      Chat.create({
        name: 'Brest Football',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        locationId: 'Brest',
        messenger: 'skype',
        id: 'sport5'
      })
    ]);
  },
  eSportAndComputerGame() {
    return Promise.allSettled([
      Chat.create({
        name: 'Foosball & XBOX Club',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'eSport1'
      }),
      Chat.create({
        name: 'Counter-strike',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'eSport2'
      })
    ]);
  },
  travels() {
    return Promise.allSettled([
      Chat.create({
        name: 'Travel',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'travel1'
      })
    ]);
  },
  recreationActiveAndInactive() {
    return Promise.allSettled([
      Chat.create({
        name: 'Сауна',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'recreation1'
      }),
      Chat.create({
        name: 'Клуб любителей снега',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'recreation2'
      }),
      Chat.create({
        name: 'Скаладром',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'recreation3'
      }),
      Chat.create({
        name: 'Brest Баня',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'recreation4'
      }),
      Chat.create({
        name: 'Karting',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'recreation5'
      })
    ]);
  },
  gambling() {
    return Promise.allSettled([
      Chat.create({
        name: 'Покер',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'gambling1'
      }),
      Chat.create({
        name: 'Brest Poker',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'gambling2'
      })
    ]);
  },
  homeAndFamily() {
    return Promise.allSettled([
      Chat.create({
        name: 'Мама-Папа',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'homeAndFamily1'
      })
    ]);
  },
  technologies() {
    return Promise.allSettled([
      Chat.create({
        name: 'Linux',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'technologies1'
      }),
      Chat.create({
        name: 'Mastery',
        link: 'https://tgwidget.com/widget/?id=5fdca68c83ba8846638b456b',
        messenger: 'telegram',
        id: 'technologies2'
      }),
      Chat.create({
        name: 'Mastery_2',
        link: 'https://tgwidget.com/widget/?id=5fdca68c83ba8846638b456b',
        messenger: 'telegram',
        id: 'technologies3'
      }),
      Chat.create({
        name: 'Mastery_3',
        link: 'https://tgwidget.com/widget/?id=5fdca68c83ba8846638b456b',
        messenger: 'telegram',
        id: 'technologies4'
      })
    ]);
  },
  gender() {
    return Promise.allSettled([
      Chat.create({
        name: 'Dudes',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'gender1'
      }),
      Chat.create({
        name: 'Girls',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'gender2'
      })
    ]);
  },
  companyChats() {
    return Promise.allSettled([
      Chat.create({
        name: 'чмок',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'companyChats1'
      }),
      Chat.create({
        name: 'news',
        link: 'https://join.skype.com/hCdKM7qhxKLl',
        messenger: 'skype',
        id: 'companyChats2'
      })
    ]);
  }
};
module.exports = chatsCreator;
