const db = require('../models');

const Location = db.location;

const locationCreator = async () => {
  // eslint-disable-next-line node/no-unsupported-features/es-builtins
  return Promise.allSettled([
    Location.create({
      name: 'all'
    }),
    Location.create({
      name: 'Minsk'
    }),
    Location.create({
      name: 'Brest'
    }),
    Location.create({
      name: 'Mogilev'
    }),
    Location.create({
      name: 'Vitebsk'
    }),
    Location.create({
      name: 'Gomel'
    }),
    Location.create({
      name: 'Grodno'
    })
  ]);
};
module.exports = locationCreator;
