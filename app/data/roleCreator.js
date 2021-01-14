const db = require('../models');

const Role = db.role;

const roleCreator = async () => {
  // eslint-disable-next-line node/no-unsupported-features/es-builtins
  return Promise.allSettled([
    Role.create({
      id: 1,
      name: 'user'
    }),
    Role.create({
      id: 2,
      name: 'admin'
    })
  ]);
};
module.exports = roleCreator;
