/* eslint-disable node/no-unsupported-features/es-builtins */
const db = require('../models');

const Interest = db.interest;

const interestsCreator = async () => {
  return Promise.allSettled([
    Interest.create({
      name: 'Football',
      tagId: 'Sport',
      id: 'football'
    }),
    Interest.create({
      name: 'Basketball',
      tagId: 'Sport',
      id: 'basketball'
    }),
    Interest.create({
      name: 'Volleyball',
      tagId: 'Sport',
      id: 'volleyball'
    }),
    Interest.create({
      name: 'eSport',
      tagId: 'eSport',
      id: 'eSport'
    }),
    Interest.create({
      name: 'Hockey',
      tagId: 'Sport',
      id: 'hockey'
    }),
    Interest.create({
      name: 'FIFA',
      tagId: 'eSport',
      id: 'fifa'
    }),
    Interest.create({
      name: 'CS',
      tagId: 'eSport',
      id: 'cs'
    }),
    Interest.create({
      name: 'DOTA',
      tagId: 'eSport',
      id: 'dota'
    }),
    Interest.create({
      name: 'PlayStation',
      tagId: 'Games',
      id: 'playStation'
    }),
    Interest.create({
      name: 'XBox',
      tagId: 'Games',
      id: 'xBox'
    }),
    Interest.create({
      name: 'apple',
      tagId: 'Technologies',
      id: 'apple'
    }),
    Interest.create({
      name: 'Front End',
      tagId: 'Technologies',
      id: 'frontEnd'
    }),
    Interest.create({
      name: 'React Native',
      tagId: 'Technologies',
      id: 'reactNative'
    }),
    Interest.create({
      name: 'Back End',
      tagId: 'Technologies',
      id: 'backEnd'
    }),
    Interest.create({
      name: 'Sony',
      tagId: 'Technologies',
      id: 'sony'
    }),
    Interest.create({
      name: 'Windows',
      tagId: 'Technologies',
      id: 'windows'
    }),
    Interest.create({
      name: 'React',
      tagId: 'Technologies',
      id: 'react'
    }),
    Interest.create({
      name: 'Angular',
      tagId: 'Technologies',
      id: 'angular'
    }),
    Interest.create({
      name: 'PHP',
      tagId: 'Technologies',
      id: 'php'
    }),
    Interest.create({
      name: 'nodeJS',
      tagId: 'Technologies',
      id: 'nodeJs'
    }),
    Interest.create({
      name: 'Ajax',
      tagId: 'Technologies',
      id: 'ajax'
    }),
    Interest.create({
      name: 'Redux',
      tagId: 'Technologies',
      id: 'redux'
    }),
    Interest.create({
      name: 'Java Script',
      tagId: 'Technologies',
      id: 'javaScript'
    }),
    Interest.create({
      name: 'Java Script 2.0',
      tagId: 'Technologies',
      id: 'javaScript2'
    }),
    Interest.create({
      name: 'Animals',
      tagId: 'Home and Family',
      id: 'animals'
    }),
    Interest.create({
      name: 'Family',
      tagId: 'Home and Family',
      id: 'family'
    }),
    Interest.create({
      name: 'travel',
      tagId: 'Travel',
      id: 'travel'
    }),
    Interest.create({
      name: 'Poker',
      tagId: 'Gambling',
      id: 'poker'
    }),
    Interest.create({
      name: 'Vegas',
      tagId: 'Gambling',
      id: 'vegas'
    }),
    Interest.create({
      name: 'Climbing',
      tagId: 'Recreation Active',
      id: 'climbing'
    }),
    Interest.create({
      name: 'Ski and snowboard',
      tagId: 'Recreation',
      id: 'skiAndSnowboard'
    }),
    Interest.create({
      name: 'Carting',
      tagId: 'Recreation',
      id: 'carting'
    }),
    Interest.create({
      name: 'sauna',
      tagId: 'Recreation',
      id: 'sauna'
    })
  ]);
};
module.exports = interestsCreator;
