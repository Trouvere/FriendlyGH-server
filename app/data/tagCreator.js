/* eslint-disable node/no-unsupported-features/es-builtins */
const db = require('../models');

const Tag = db.tag;

const tagCreator = async () => {
  return Promise.allSettled([
    Tag.create({
      id: 'sport',
      name: 'sport'
    }),
    Tag.create({
      id: 'eSport',
      name: 'eSport'
    }),
    Tag.create({
      id: 'Games',
      name: 'Games'
    }),
    Tag.create({
      id: 'Technologies',
      name: 'Technologies'
    }),
    Tag.create({
      id: 'Home and Family',
      name: 'Home and Family'
    }),
    Tag.create({
      id: 'Travel',
      name: 'Travel'
    }),
    Tag.create({
      id: 'Gambling',
      name: 'Gambling'
    }),
    Tag.create({
      id: 'Recreation Active',
      name: 'Recreation Active'
    }),
    Tag.create({
      id: 'Recreation',
      name: 'Recreation'
    }),
    Tag.create({
      id: 'other',
      name: 'other'
    })
  ]);
};
module.exports = tagCreator;
