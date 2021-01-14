const db = require('../models');

const Gender = db.gender;

const genderCreator = async () => {
  // eslint-disable-next-line node/no-unsupported-features/es-builtins
  return Promise.allSettled([
    Gender.create({
      name: 'male'
    }),

    Gender.create({
      name: 'female'
    })
  ]);
};
module.exports = genderCreator;
